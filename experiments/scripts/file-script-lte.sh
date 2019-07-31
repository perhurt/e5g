#/bin/bash

# Downloads files using wget, and outputs the file size, download time, the goodput and pcaps.
# Outputs to stderr and pcaps to ~pcaps/file.

SERVER_IP=192.168.60.155
MBB_IP=192.168.60.177
GW_IP=192.168.60.103
RATE="54mbit"
DELAY="11ms"
RUN_TIME=40

trap ctrl-c INT

ctrl-c () {
	sudo pkill tcpdump
	ssh -q $SERVER_IP "sudo pkill tcpdump"

	ssh -q $MBB_IP "sudo tc qdisc del dev mbb-gw root" 2>/dev/null
	ssh -q $MBB_IP "sudo tc qdisc del dev mbb-client root" 2>/dev/null
	ssh -q $GW_IP "sudo tc qdisc del dev gw-mbb root" 2>/dev/null
	ssh -q $GW_IP "sudo tc qdisc del dev gw-server root" 2>/dev/null
	
	exit 0
}

run () {
	ssh -q $MBB_IP "sudo tc qdisc add dev mbb-gw root netem rate $RATE" 2>/dev/null
	ssh -q $MBB_IP "sudo tc qdisc add dev mbb-client root netem rate $RATE" 2>/dev/null

	ssh -q $GW_IP "sudo tc qdisc add dev gw-mbb root netem delay $DELAY" 2>/dev/null
	ssh -q $GW_IP "sudo tc qdisc add dev gw-server root netem delay $DELAY" 2>/dev/null

	sudo tcpdump -imbb0 -s96 -w$1-$2-$WAIT.pcap tcp 2>/dev/null &
	ssh -q $SERVER_IP "cd ~/pcaps/file && sudo tcpdump -iserver-gw -s96 -w$1-$2.pcap tcp" 2>/dev/null &
	
	curl -o /dev/null -m $RUN_TIME -w "$1,%{time_total},%{size_download},%{speed_download}" http://10.0.0.2/$1 2>/dev/null
	echo ""

	sudo pkill tcpdump
	ssh -q $SERVER_IP "sudo pkill tcpdump"

	ssh -q $MBB_IP "sudo tc qdisc del dev mbb-gw root" 2>/dev/null
	ssh -q $MBB_IP "sudo tc qdisc del dev mbb-client root" 2>/dev/null
	ssh -q $GW_IP "sudo tc qdisc del dev gw-mbb root" 2>/dev/null
	ssh -q $GW_IP "sudo tc qdisc del dev gw-server root" 2>/dev/null
}

sudo sysctl net.mptcp.mptcp_enabled=0 &>/dev/null #?
ssh -q $SERVER_IP "sudo sysctl net.mptcp.mptcp_enabled=0" &>/dev/null

sudo mkdir ~/pcaps &>/dev/null
sudo mkdir ~/pcaps/file &>/dev/null
cd ~/pcaps/file

ssh -q $SERVER_IP "mkdir ~/pcaps" 2>/dev/null
ssh -q $SERVER_IP "mkdir ~/pcaps/file" 2>/dev/null

# Reset qdiscs, just in case
ssh -q $MBB_IP "sudo tc qdisc del dev mbb-gw root" 2>/dev/null
ssh -q $MBB_IP "sudo tc qdisc del dev mbb-client root" 2>/dev/null
ssh -q $GW_IP "sudo tc qdisc del dev gw-mbb root" 2>/dev/null
ssh -q $GW_IP "sudo tc qdisc del dev gw-server root" 2>/dev/null

echo "Filename,Time(s),Size(bytes),Goodput(B/s)" 1>&2

for i in {1..30}
do
	run "2M" $i
	run "20M" $i
	run "200M" $i
	run "2G" $i
done

tar -czf ~/pcaps/scenario$1-file-LTE.tar.gz ~/pcaps/file &>/dev/null
ssh -q $SERVER_IP "tar -czf ~/pcaps/scenario$1-file-LTE.tar.gz ~/pcaps/file" &>/dev/null

sudo rm ~/pcaps/file/* &>/dev/null
ssh -q $SERVER_IP "sudo rm ~/pcaps/file/*" &>/dev/null
