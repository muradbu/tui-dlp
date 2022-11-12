import React from "react";
import { Box, Text } from 'ink';
import { UncontrolledTextInput } from 'ink-text-input';
import clipboard from "clipboardy";

type Props = {
    autoFillUrl?: boolean;
}

function isUrl() {
    const value = clipboard.readSync();
    if (value.match(/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/)) {
        return value
    }

    return undefined
}

export default function UrlBar({ autoFillUrl = false }: Props) {
    const url = autoFillUrl ? isUrl() : undefined;

    return (
        <>
            <Box borderStyle="round" paddingX={1}>
                <Box marginRight={1}>
                    <Text color="green">URL:</Text>
                </Box>
                <UncontrolledTextInput initialValue={url} />
            </Box>
            {url && <Text color="green">Pasted URL from clipboard</Text>}
        </>
    );
}