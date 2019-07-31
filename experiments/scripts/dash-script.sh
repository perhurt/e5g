#!/bin/bash

# test-url's:
# http://10.0.0.2/dash_js_bbb.html, http://10.0.0.2/dash_js_car.html
#xvfb-run google-chrome --enable-logging=stderr --url "http://10.0.0.2/dash_js_bbb.html"

# usage: dash_script <WAIT> <SCENARIO>

WAIT=$1

SERVER_IP=192.168.60.155
MBB_IP=192.168.60.177
GW_IP=192.168.60.103
MBB_PATTERN="scenario$2-bw5g"
DELAY="11ms"
RUN_TIME=40

trap ctrl-c INT

ctrl-c () {
	sudo pkill tcpdump
	ssh -q -Y $SERVER_IP "sudo pkill tcpdump"

	ssh -q $MBB_IP "sudo tc qdisc del dev mbb-gw root" 2>/dev/null
	ssh -q $MBB_IP "sudo tc qdisc del dev mbb-client root" 2>/dev/null
	ssh -q $GW_IP "sudo tc qdisc del dev gw-mbb root" 2>/dev/null
	ssh -q $GW_IP "sudo tc qdisc del dev gw-server root" 2>/dev/null

    ssh -q $MBB_IP "sudo iptables -t mangle -F"

	exit 0
}

run () {
	ssh -q $MBB_IP "sudo iptables -A PREROUTING -t mangle -p tcp --dport 80 -j MARK --set-mark 42" 2>/dev/null
	ssh -q $MBB_IP "sudo iptables -A PREROUTING -t mangle -p tcp --sport 80 -j MARK --set-mark 42" 2>/dev/null

	ssh -q $MBB_IP "sudo tc qdisc add dev mbb-gw root netem fwmark 42 pattern time rate $MBB_PATTERN" 2>/dev/null
	ssh -q $MBB_IP "sudo tc qdisc add dev mbb-client root netem fwmark 42 pattern time rate $MBB_PATTERN" 2>/dev/null

	ssh -q $GW_IP "sudo tc qdisc add dev gw-mbb root netem delay $DELAY" 2>/dev/null
	ssh -q $GW_IP "sudo tc qdisc add dev gw-server root netem delay $DELAY" 2>/dev/null

	if [ $WAIT -eq 1 ]
	then
		wget http://10.0.0.2/whatever &>/dev/null
		sleep 2
	elif [ $WAIT -eq 2 ]
	then
		wget http://10.0.0.2/whatever &>/dev/null
		sleep 4
	fi

	sudo tcpdump -imbb0 -s96 -w$1-$2-$WAIT.pcap tcp 2>/dev/null &
	ssh -q -Y $SERVER_IP "cd ~/pcaps/dash && sudo tcpdump -iserver-gw -s96 -w$1-$2-$WAIT.pcap tcp" 2>/dev/null &
	timeout $RUN_TIME xvfb-run -a google-chrome --autoplay-policy=no-user-gesture-required --enable-logging=stderr --url "http://10.0.0.2/$1.html"
	
	sudo pkill tcpdump
	ssh -q -Y $SERVER_IP "sudo pkill tcpdump" 2>/dev/null

	ssh -q $MBB_IP "sudo tc qdisc del dev mbb-gw root" 2>/dev/null
	ssh -q $MBB_IP "sudo tc qdisc del dev mbb-client root" 2>/dev/null
	ssh -q $GW_IP "sudo tc qdisc del dev gw-mbb root" 2>/dev/null
	ssh -q $GW_IP "sudo tc qdisc del dev gw-server root" 2>/dev/null

    ssh -q $MBB_IP "sudo iptables -t mangle -F"
}

sudo sysctl net.mptcp.mptcp_enabled=0 &>/dev/null

ssh -q $SERVER_IP "sudo sysctl net.mptcp.mptcp_enabled=0" &>/dev/null

sudo mkdir ~/pcaps &>/dev/null
sudo mkdir ~/pcaps/dash &>/dev/null
cd ~/pcaps/dash

ssh -q -Y $SERVER_IP "mkdir ~/pcaps" 2>/dev/null
ssh -q -Y $SERVER_IP "mkdir ~/pcaps/dash" 2>/dev/null

# Reset qdiscs, just in case
ssh -q $MBB_IP "sudo tc qdisc del dev mbb-gw root" 2>/dev/null
ssh -q $MBB_IP "sudo tc qdisc del dev mbb-client root" 2>/dev/null
ssh -q $GW_IP "sudo tc qdisc del dev gw-mbb root" 2>/dev/null
ssh -q $Gw_IP "sudo tc qdisc del dev gw-server root" 2>/dev/null

for i in {1..30}
do
	run "dash_js_bbb" $i
done

sudo tar -czf ~/pcaps/scenario$2-dash-5g-$1.tar.gz ~/pcaps/dash &>/dev/null
ssh -q $SERVER_IP "sudo tar -czf ~/pcaps/scenario$2-dash-5g-$1.tar.gz ~/pcaps/dash" &>/dev/null

sudo rm ~/pcaps/dash/* &>/dev/null
ssh -q $SERVER_IP "sudo rm ~/pcaps/dash/*" &>/dev/null
