#! /usr/bin/python
import sys

LOS_THRESH = 20 # SINR in dB which is used to decide whether the UE is LOS or not.
TIME_THRESH = 1.0/1000 # To prevent pattern from switching between LOS/NLOS too often.

def readFile(filename):
    with open(filename, 'r') as f:
        lines = f.readlines()
        f.close()
        return lines

def getTimes(filename):
    lines = readFile(filename)
    del lines[0]

    # Does the UE start in LOS or not?
    los = True
    first_line = lines[0].split('\t')
    if float(first_line[12]) < LOS_THRESH:
        los = False

    times = [0.001]

    for line in lines:
        line = line.split('\t')
        
        time = float(line[1])
        sinr = float(line[12])

        # Check for LOS/NLOS transition.
        if los and sinr < LOS_THRESH and time - times[-1] > TIME_THRESH:
            times.append(time)
            los = False
        elif not los and sinr >= LOS_THRESH and time - times[-1] > TIME_THRESH:
            times.append(time)
            los = True

    times.append(40) # Append end-point.
    return times

def getIntervalStats(interval_start, interval_span, n_bytes, n_packets):
    rate = (n_bytes*8)/(interval_span) # bps
    return [int(interval_start*1000), int(rate)]

def getCharacteristics(filename, times):
    lines = readFile(filename)
    byte_sum = 0
    n_packets = 0
    i = 1
    t = 0
    output = []

    for line in lines:
        line = line.split('\t')
        time = float(line[0])

        for idx in range(1, len(times)):
            if idx is not len(times):
                if time > times[idx] and i is idx:
                
                    if byte_sum is not 0 or n_packets is not 0:
                        output.append(getIntervalStats(times[idx-1], time - t, byte_sum, n_packets))

                    byte_sum = 0
                    n_packets = 0

                    i = i + 1
                    t = times[idx]
       
        byte_sum = byte_sum + float(line[1])
        n_packets = n_packets + 1
    
    if byte_sum is not 0 or n_packets is not 0:
        output.append(getIntervalStats(times[idx-1], time - t, byte_sum, n_packets))

    return output

def patternize(file1, file2):
    times = getTimes(file1)
    output = getCharacteristics(file2, times)

    bw_string = 'patt_gen -bw -s 40000 -u bit -o bw5g '

    i = 0
    for l in output:
        bw_string = bw_string +  str(l[0]) + ',' + str(l[1]) + ','
        
    sys.stderr.write(bw_string[:-1] + '\n')

if len(sys.argv) != 3:
    print('usage: python3 patternize.py <RxPacketTrace.txt> <mmWave-udp-data-am.txt>')
    exit()

patternize(sys.argv[1], sys.argv[2])

