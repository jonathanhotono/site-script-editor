import {ISiteScriptContainer, INodeTypeProps} from '../types';
import {TreeItem} from 'react-sortable-tree';

export function setSiteScript(siteScriptContainer : ISiteScriptContainer) {
    return {type: 'SET_SITE_SCRIPT', siteScriptContainer};
}
export function setTreeData(treeData : TreeItem[]) {
    return {type: 'SET_TREE_DATA', treeData};
}
export function setNodeTypeProps(nodeType : string, nodeTypeProps:INodeTypeProps) {
    return {type: 'SET_NODE_TYPE_PROPS', nodeType,nodeTypeProps };
}
