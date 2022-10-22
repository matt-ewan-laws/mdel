#!/bin/bash

export $(cat .env | xargs) && zola serve
