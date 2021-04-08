#!/bin/sh -l
echo "Starting my-build-script.sh"
mvn -B versions:set -DnewVersion=$1 -DgenerateBackupPoms=false
echo "Finishing my-build-script.sh"