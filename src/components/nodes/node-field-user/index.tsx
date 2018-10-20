import * as React from 'react';
import { INodeProps } from '../../../types';
import NodeFieldWrapper from '../../../components/nodes/node-field-wrapper';


export  function NodeFieldUser(props : INodeProps) {
    var wrapperProps = {...props, smallTitle:"User field"}
    return <NodeFieldWrapper {...wrapperProps}>
    </NodeFieldWrapper>;
}