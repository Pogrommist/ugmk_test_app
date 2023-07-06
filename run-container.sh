#!/bin/bash

docker run --rm -p 3000:3000 -p 3001:3001 --name ugmk_test_app ugmk_test_app

docker wait ugmk_test_app

docker rmi ugmk_test_app
