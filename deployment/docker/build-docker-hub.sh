#!/bin/bash

export NEBULAE_TPM_EMI_IMAGE_NAMESPACE=nebulae
export NEBULAE_TPM_EMI_IMAGE_NAME=tpm-emi
export NEBULAE_TPM_EMI_IMAGE_TAG=0.0.4

rm -rf dist/
cp -R ../../dist/emi/dist ./dist
docker build  -t $NEBULAE_TPM_EMI_IMAGE_NAMESPACE/$NEBULAE_TPM_EMI_IMAGE_NAME:$NEBULAE_TPM_EMI_IMAGE_TAG -t $NEBULAE_TPM_EMI_IMAGE_NAMESPACE/$NEBULAE_TPM_EMI_IMAGE_NAME:latest .
docker login -u $DOCKER_USER -p $DOCKER_PASS
docker push $NEBULAE_TPM_EMI_IMAGE_NAMESPACE/$NEBULAE_TPM_EMI_IMAGE_NAME:$NEBULAE_TPM_EMI_IMAGE_TAG
docker push $NEBULAE_TPM_EMI_IMAGE_NAMESPACE/$NEBULAE_TPM_EMI_IMAGE_NAME:latest