#!/bin/bash
green=$(tput setaf 2)
normal=$(tput sgr0)

#use debug mode
read -r -p "${green}Run in debug mode? (1 / 0) [Default - 0]: ${normal}" DEBUG

#environment tag
read -r -p "${green}Choose environment - DEV / LOCAL [Default - DEV]: ${normal}" ENVIRONMENT

#use allure
read -r -p "${green}Use Allure? (1 / 0) [Default - 0]: ${normal}" ALLURE

#parallel tag
read -r -p "${green}Number of parallel threads ( >= 1 ) [Default - 1]: ${normal}" PARALLEL_THREADS

#cucumber tag
read -r -p "${green}Write the tag expression for current run. Example: @testTag and (not @wip) [Default - not @wip]: ${normal}" TAG

#run cucumber tests with dynamic parameters for environment, parallelization and desired cucumber tag
PWDEBUG="${DEBUG:=0}" npx cross-env ENV="${ENVIRONMENT:=DEV}" USE_ALLURE="${ALLURE:=0}" npm run cucumber -- --parallel "${PARALLEL_THREADS:=1}" --tags "${TAG:="not @wip"}"