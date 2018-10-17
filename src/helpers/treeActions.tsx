import { addNodeUnderParent, TreeItem } from "react-sortable-tree";
import {
  ensureListsNode,
  ensureNavLinksNode,
  ensureSiteColumnsNode,
  ensureContentTypesNode,
  ensureInstallSolutionsNode,
  ensureAddUsersNode
} from "../helpers";

export function addListToTree(
  treeData: TreeItem[],
  setTreeAndScriptData: (treeData: TreeItem[]) => void
) {
  var newTree = ensureListsNode(treeData);
  var listsNode = newTree[0].children!.find(child => child.type === "lists");
  var newList = {
    children: [
      {
        title: "Fields",
        children: [],
        type: "listFields"
      },
      {
        title: "Content types",
        children: [],
        type: "listContentTypes"
      },
      {
        title: "Column formatters",
        children: [],
        type: "columnFormatters"
      }
    ],
    type: "list",
    expanded: true,
    data: { listName: "New list", templateType: 100 }
  };
  listsNode!.children!.push({
    ...newList
  });
  setTreeAndScriptData(newTree);
}
export function addTriggerFlowToTree(
  treeData: TreeItem[],
  setTreeAndScriptData: (treeData: TreeItem[]) => void
) {
  var newTree = [...treeData];
  var newNode = {
    type: "triggerFlow",
    expanded: true,
    data: { url: "", name: "", parameters: {} }
  };
  treeData[0].children!.push(newNode);
  setTreeAndScriptData(newTree);
}
export function addNavLinkToTree(
  treeData: TreeItem[],
  setTreeAndScriptData: (treeData: TreeItem[]) => void
) {
  var newTree = [...treeData];
  var navLinksNode = ensureNavLinksNode(newTree[0].children!);
  var newNavNode = {
    type: "navLink",
    expanded: true,
    data: { url: "", displayName: "", isWebRelative: false }
  };
  navLinksNode!.children!.push({
    ...newNavNode
  });
  setTreeAndScriptData(newTree);
}
export function addFieldToList(
  path: string[] | number[],
  treeData: TreeItem[],
  setTreeAndScriptData: (treeData: TreeItem[]) => void
) {
  var getNodeKey = ({ treeIndex }: any) => treeIndex;

  var fullTree = addNodeUnderParent({
    treeData: treeData,
    parentKey: path[path.length - 1],
    expandParent: true,
    getNodeKey,
    newNode: {
      children: [],
      type: "fieldText",
      data: {
        fieldType: "Text",
        displayName: "New field"
      }
    }
  });
  setTreeAndScriptData(fullTree.treeData);
}

export function addXMLFieldToList(
  path: string[] | number[],
  treeData: TreeItem[],
  setTreeAndScriptData: (treeData: TreeItem[]) => void
) {
  var getNodeKey = ({ treeIndex }: any) => treeIndex;

  var fullTree = addNodeUnderParent({
    treeData: treeData,
    parentKey: path[path.length - 1],
    expandParent: true,
    getNodeKey,
    newNode: {
      children: [],
      type: "fieldXML",
      data: {
        schemaXml:
          '<Field Type="Choice" DisplayName="New field" Required="FALSE" Format="Dropdown" StaticName="NewField" Name="NewField"><Default>Choise 1</Default><CHOICES><CHOICE>Choise 1</CHOICE><CHOICE>Choise 2</CHOICE></CHOICES></Field>'
      }
    }
  });
  setTreeAndScriptData(fullTree.treeData);
}
export function addLookupXMLFieldToList(
  path: string[] | number[],
  treeData: TreeItem[],
  setTreeAndScriptData: (treeData: TreeItem[]) => void
) {
  var getNodeKey = ({ treeIndex }: any) => treeIndex;

  var fullTree = addNodeUnderParent({
    treeData: treeData,
    parentKey: path[path.length - 1],
    expandParent: true,
    getNodeKey,
    newNode: {
      children: [],
      type: "fieldLookupXML",
      data: {
        schemaXml:
          '<Field Type="Lookup" DisplayName="Contoso Project Category" Required="FALSE" EnforceUniqueValues="FALSE" ShowField="Title" UnlimitedLengthInDocumentLibrary="FALSE" RelationshipDeleteBehavior="None" ID="{101f1f89-d667-4c7f-9ebc-76cb5831d0a2}" StaticName="ContosoProjectCategory" Name="ContosoProjectCategory" />'
      }
    }
  });
  setTreeAndScriptData(fullTree.treeData);
}
export function addDeleteFieldToList(
  path: string[] | number[],
  treeData: TreeItem[],
  setTreeAndScriptData: (treeData: TreeItem[]) => void
) {
  var getNodeKey = ({ treeIndex }: any) => treeIndex;

  var fullTree = addNodeUnderParent({
    treeData: treeData,
    parentKey: path[path.length - 1],
    expandParent: true,
    getNodeKey,
    newNode: {
      title: "New field",
      children: [],
      type: "fieldDeletion",
      data: {
        displayName: ""
      }
    }
  });
  setTreeAndScriptData(fullTree.treeData);
}
export function addContentTypeToList(
  path: string[] | number[],
  treeData: TreeItem[],
  setTreeAndScriptData: (treeData: TreeItem[]) => void
) {
  var getNodeKey = ({ treeIndex }: any) => treeIndex;

  var fullTree = addNodeUnderParent({
    treeData: treeData,
    parentKey: path[path.length - 1],
    expandParent: true,
    getNodeKey,
    newNode: {
      children: [],
      type: "listContentType",
      data: { name: "" }
    }
  });
  setTreeAndScriptData(fullTree.treeData);
}
export function addFieldCustomizerToList(
  path: string[] | number[],
  treeData: TreeItem[],
  setTreeAndScriptData: (treeData: TreeItem[]) => void
) {
  var getNodeKey = ({ treeIndex }: any) => treeIndex;

  var fullTree = addNodeUnderParent({
    treeData: treeData,
    parentKey: path[path.length - 1],
    expandParent: true,
    getNodeKey,
    newNode: {
      children: [],
      type: "listFieldCustomizer",
      data: {}
    }
  });
  setTreeAndScriptData(fullTree.treeData);
}
export function addListViewCommandSet(
  path: string[] | number[],
  treeData: TreeItem[],
  setTreeAndScriptData: (treeData: TreeItem[]) => void
) {
  var getNodeKey = ({ treeIndex }: any) => treeIndex;

  var fullTree = addNodeUnderParent({
    treeData: treeData,
    parentKey: path[path.length - 1],
    expandParent: true,
    getNodeKey,
    newNode: {
      children: [],
      type: "listViewCommandSet",
      data: {}
    }
  });
  setTreeAndScriptData(fullTree.treeData);
}
export function addContentTypeDeletionToList(
  path: string[] | number[],
  treeData: TreeItem[],
  setTreeAndScriptData: (treeData: TreeItem[]) => void
) {
  var getNodeKey = ({ treeIndex }: any) => treeIndex;

  var fullTree = addNodeUnderParent({
    treeData: treeData,
    parentKey: path[path.length - 1],
    expandParent: true,
    getNodeKey,
    newNode: {
      children: [],
      type: "listContentTypeDeletion",
      data: { name: "" }
    }
  });
  setTreeAndScriptData(fullTree.treeData);
}
export function addColumnFormatter(
  path: string[] | number[],
  treeData: TreeItem[],
  setTreeAndScriptData: (treeData: TreeItem[]) => void
) {
  var getNodeKey = ({ treeIndex }: any) => treeIndex;

  var fullTree = addNodeUnderParent({
    treeData: treeData,
    parentKey: path[path.length - 1],
    expandParent: true,
    getNodeKey,
    newNode: {
      title: "",
      children: [],
      type: "columnFormatter",
      data: {
        fieldDisplayName: "",
        formatterJSON: {}
      }
    }
  });
  setTreeAndScriptData(fullTree.treeData);
}
export function addViewToList(
  path: string[] | number[],
  treeData: TreeItem[],
  setTreeAndScriptData: (treeData: TreeItem[]) => void
) {
  var getNodeKey = ({ treeIndex }: any) => treeIndex;

  var fullTree = addNodeUnderParent({
    treeData: treeData,
    parentKey: path[path.length - 1],
    expandParent: true,
    getNodeKey,
    newNode: {
      children: [
        {
          title: "View Fields",
          children: [],
          type: "listViewFields",
          expanded: true
        }
      ],
      type: "listView",
      data: { name: "" }
    }
  });
  setTreeAndScriptData(fullTree.treeData);
}
export function addViewFieldToView(
  path: string[] | number[],
  treeData: TreeItem[],
  setTreeAndScriptData: (treeData: TreeItem[]) => void
) {
  var getNodeKey = ({ treeIndex }: any) => treeIndex;

  var fullTree = addNodeUnderParent({
    treeData: treeData,
    parentKey: path[path.length - 1],
    expandParent: true,
    getNodeKey,
    newNode: {
      children: [],
      type: "listViewField",
      data: { name: "" }
    }
  });
  setTreeAndScriptData(fullTree.treeData);
}
export function addViewDeletionToList(
  path: string[] | number[],
  treeData: TreeItem[],
  setTreeAndScriptData: (treeData: TreeItem[]) => void
) {
  var getNodeKey = ({ treeIndex }: any) => treeIndex;

  var fullTree = addNodeUnderParent({
    treeData: treeData,
    parentKey: path[path.length - 1],
    expandParent: true,
    getNodeKey,
    newNode: {
      children: [],
      type: "listViewDeletion",
      data: { name: "" }
    }
  });
  setTreeAndScriptData(fullTree.treeData);
}

export function addSiteColumnToTree(
  treeData: TreeItem[],
  setTreeAndScriptData: (treeData: TreeItem[]) => void
) {
  var newTree = [...treeData];
  var navLinksNode = ensureSiteColumnsNode(newTree[0].children!);
  var newNavNode = {
    children: [],
    type: "siteColumn",
    data: {
      fieldType: "Text",
      displayName: "New field",
      internalName: "newField"
    }
  };
  navLinksNode!.children!.push({
    ...newNavNode
  });
  setTreeAndScriptData(newTree);
}
export function addSiteColumnXMLToTree(
  treeData: TreeItem[],
  setTreeAndScriptData: (treeData: TreeItem[]) => void
) {
  var newTree = [...treeData];
  var navLinksNode = ensureSiteColumnsNode(newTree[0].children!);
  var newNavNode = {
    children: [],
    type: "siteColumnXML",
    data: {
      schemaXml:
        '<Field Type="Choice" DisplayName="Project Status" Required="FALSE" Format="Dropdown" StaticName="ProjectStatus" Name="ProjectStatus"><Default>In Progress</Default><CHOICES><CHOICE>In Progress</CHOICE><CHOICE>In Review</CHOICE><CHOICE>Done</CHOICE><CHOICE>Has Issues</CHOICE></CHOICES></Field>',
      pushChanges: true
    }
  };
  navLinksNode!.children!.push({
    ...newNavNode
  });
  setTreeAndScriptData(newTree);
}
export function addContentTypeToTree(
  treeData: TreeItem[],
  setTreeAndScriptData: (treeData: TreeItem[]) => void
) {
  var newTree = [...treeData];
  var navLinksNode = ensureContentTypesNode(newTree[0].children!);
  var newNavNode = {
    children: [
      {
        title: "Site columns",
        children: [],
        type: "contentTypeSiteColumns",
        expanded: true
      }
    ],
    type: "contentType",
    data: {},
    expanded: true
  };
  navLinksNode!.children!.push({
    ...newNavNode
  });
  setTreeAndScriptData(newTree);
}

export function addSiteColumnToContentType(
  path: string[] | number[],
  treeData: TreeItem[],
  setTreeAndScriptData: (treeData: TreeItem[]) => void
) {
  var getNodeKey = ({ treeIndex }: any) => treeIndex;

  var fullTree = addNodeUnderParent({
    treeData: treeData,
    parentKey: path[path.length - 1],
    expandParent: true,
    getNodeKey,
    newNode: {
      children: [],
      type: "contentTypeSiteColumn",
      data: {
        fieldType: "Text",
        displayName: "New field"
      }
    }
  });
  setTreeAndScriptData(fullTree.treeData);
}
export function addInstallSolutionToTree(
  treeData: TreeItem[],
  setTreeAndScriptData: (treeData: TreeItem[]) => void
) {
  var newTree = [...treeData];
  var navLinksNode = ensureInstallSolutionsNode(newTree[0].children!);
  var newNavNode = {
    type: "installSolution",
    data: {},
    expanded: true
  };
  navLinksNode!.children!.push({
    ...newNavNode
  });
  setTreeAndScriptData(newTree);
}
export function addUserToTree(
  treeData: TreeItem[],
  setTreeAndScriptData: (treeData: TreeItem[]) => void
) {
  var newTree = [...treeData];
  var parentNode = ensureAddUsersNode(newTree[0].children!);
  var newNavNode = {
    type: "addUser",
    expanded: true,
    data: { principal: "", group: "" }
  };
  parentNode!.children!.push({
    ...newNavNode
  });
  setTreeAndScriptData(newTree);
}