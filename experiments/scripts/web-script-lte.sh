#!/bin/bash

# outputs to stderr

# List of Metrics:
# Time To First Byte (TTFB):	Time (ms) at which the first byte of the response has been received.
# Time To First Paint (TTFP):	Time (ms) at which the first object has been painted.
# Time To Interactive (TTI):	Time (ms) at which the user may begin to interact with the web page using an input device.
# domContentLoaded (DOM):	Time (ms) at which the DOM, CSSOM and parsing blocking JS are ready. The end-point of the critical rendering path.
# onLoad (PLT):			Time (ms) at which all resources has been recevied (not necessarily rendered!).
# Above The Fold (ATF):		Time (ms) at which all content "above the fold" (in the viewport) has been rendered.
# SpeedIndex: 			Time-integral of visual completeness.

SERVER_IP=192.168.60.155
MBB_IP=192.168.60.177
GW_IP=192.168.60.103
RATE="54mbit"
DELAY="11ms"
RUN_TIME=40

trap ctrl-c INT

SCRIPT_DIR=$(cd `dirname $0` && cd ../puppeteer && pwd)

ctrl-c () {
	sudo pkill tcpdump
	ssh -q $SERVER_IP "sudo pkill tcpdump" 2>/dev/null

	ssh -q $MBB_IP "sudo tc qdisc del dev mbb-gw root" 2>/dev/null
	ssh -q $MBB_IP "sudo tc qdisc del dev mbb-client root" 2>/dev/null
	ssh -q $GW_IP "sudo tc qdisc del dev gw-mbb root" 2>/dev/null
	ssh -q $GW_IP "sudo tc qdisc del dev gw-server root" 2>/dev/null
	
	exit 0
}

run () {
	START_TIME=$(shuf -i0-20 -n1)

	ssh -q $MBB_IP "sudo tc qdisc add dev mbb-gw root netem rate $RATE" 2>/dev/null
	ssh -q $MBB_IP "sudo tc qdisc add dev mbb-client root netem rate $RATE" 2>/dev/null

	ssh -q $GW_IP "sudo tc qdisc add dev gw-mbb root netem delay $DELAY" 2>/dev/null
	ssh -q $GW_IP "sudo tc qdisc add dev gw-server root netem delay $DELAY" 2>/dev/null

	wget http://10.0.0.2/whatever &>/dev/null
	sleep $START_TIME

	sudo tcpdump -imbb0 -s96 -w$1-$2.pcap tcp 2>/dev/null &
	ssh -q $SERVER_IP "cd ~/pcaps/web && sudo tcpdump -iserver-gw -s96 -w$1-$2.pcap tcp" 2>/dev/null &

	# TODO: TIMEOUT IS RUN_TIME - START_TIME
	str=$(timeout $RUN_TIME sudo node $SCRIPT_DIR/puppeteer.js http://10.0.0.2/pages/$1.html)
	
	sudo pkill tcpdump
	ssh -q $SERVER_IP "sudo pkill tcpdump"

	ssh -q $MBB_IP "sudo tc qdisc del dev mbb-gw root" 2>/dev/null
	ssh -q $MBB_IP "sudo tc qdisc del dev mbb-client root" 2>/dev/null
	ssh -q $GW_IP "sudo tc qdisc del dev gw-mbb root" 2>/dev/null
	ssh -q $GW_IP "sudo tc qdisc del dev gw-server root" 2>/dev/null

	if [[ "$str" == *"Error"* ]]; then
		run "$1" "$2" #retry in case of error.
	else
		echo "$1,$str,$START_TIME" 1>&2		
	fi
}

sudo sysctl net.mptcp.mptcp_enabled=0 &>/dev/null
ssh -q $SERVER_IP "sudo sysctl net.mptcp.mptcp_enabled=0" &>/dev/null

sudo mkdir ~/pcaps &>/dev/null
sudo mkdir ~/pcaps/web &>/dev/null
cd ~/pcaps/web

ssh -q $SERVER_IP "mkdir ~/pcaps" 2>/dev/null
ssh -q $SERVER_IP "mkdir ~/pcaps/web" 2>/dev/null

# Reset qdiscs, just in case
ssh -q $MBB_IP "sudo tc qdisc del dev mbb-gw root" 2>/dev/null
ssh -q $MBB_IP "sudo tc qdisc del dev mbb-client root" 2>/dev/null
ssh -q $GW_IP "sudo tc qdisc del dev gw-mbb root" 2>/dev/null
ssh -q $GW_IP "sudo tc qdisc del dev gw-server root" 2>/dev/null

echo "Page,TTFB(ms),TTFP(ms),TTI(ms),DOM(ms),onLoad(ms),ATF(ms),SpeedIndex,Start time (s)" 1>&2

for i in {1..30}
do
	# NOTE: puppeteer is set to emulate an iPhone X device (viewport, user agent)
	# A chromium bug may on occasion generate screenshots of different sizes, which causes the SpeedIndex calculation to fail.
	
	run "Google" "$i"
	run "Amazon" "$i"
	run "TripAdvisor" "$i"
	run "HuffPost" "$i"
	run "CNN" "$i"
done

tar -czf ~/pcaps/scenario$1-web-LTE.tar.gz ~/pcaps/web &>/dev/null
ssh -q $SERVER_IP "tar -czf ~/pcaps/scenario$1-web-LTE.tar.gz ~/pcaps/web" &>/dev/null

sudo rm ~/pcaps/web/* &>/dev/null
ssh -q $SERVER_IP "sudo rm ~/pcaps/web/*" &>/dev/null
