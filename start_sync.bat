@echo off

:: Fetch param1
set "param1=%~1"
goto :param1Check
:param1Prompt
set /p "param1=Enter source folder/file name: "
:param1Check
if "%param1%"=="" goto :param1Prompt

:: Fetch param2    
set "param2=%~2"
goto :param2Check
:param2Prompt
set /p "param2=Enter destination folder/file name: "
:param2Check
if "%param2%"=="" goto :param2Prompt

echo Start watching for sync between %param1% and %param2%.

sass --watch %param1%:%param2%