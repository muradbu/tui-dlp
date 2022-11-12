import React, { useState } from "react";
import { Box, Text } from 'ink';
import { UncontrolledTextInput } from 'ink-text-input';

export default function UrlBar() {


    return (
        <Box borderStyle="round" paddingX={1}>
            <Box marginRight={1}>
                <Text color="green">URL:</Text>
            </Box>
            <UncontrolledTextInput />
        </Box>
    );
}