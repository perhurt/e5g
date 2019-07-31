#!/bin/bash

SCRIPT_DIR=$(cd `dirname $0` && pwd)

mkdir ~/results &>/dev/null
cd ~/results

for i in {1..3}
do
	echo "Scenario $i:"

	# 5G
	echo "	Web 5G"
	bash $SCRIPT_DIR/web-script.sh $i &> scenario$i-web-5g.out
	
	echo "	File 5G"
	bash $SCRIPT_DIR/file-script.sh 0 $i &> scenario$i-file-5g-0.out # no waiting
	bash $SCRIPT_DIR/file-script.sh 1 $i &> scenario$i-file-5g-1.out # wait 2s
	bash $SCRIPT_DIR/file-script.sh 2 $i &> scenario$i-file-5g-2.out # wait 4s

	echo "	Dash 5G"
	bash $SCRIPT_DIR/dash-script.sh 0 $i &> scenario$i-dash-5g-0.out # no waiting
	bash $SCRIPT_DIR/dash-script.sh 1 $i &> scenario$i-dash-5g-1.out # wait 2s
	bash $SCRIPT_DIR/dash-script.sh 2 $i &> scenario$i-dash-5g-2.out # wait 4s

	# LTE
	echo "	Web LTE"
	bash $SCRIPT_DIR/web-script-lte.sh $i &> scenario$i-web-lte.out
	echo "	File LTE"
	bash $SCRIPT_DIR/file-script-lte.sh $i &> scenario$i-file-lte.out # no waiting
	echo "	Dash LTE"
	bash $SCRIPT_DIR/dash-script-lte.sh $i &> scenario$i-dash-lte.out # no waiting
done
