import styled from "styled-components";

import GlobalStyle from "../styles/globalStyle";
import CodeBlock from "./Code/CodeBlock";
import Graph from './Graph';
import NodeCode from './Code/NodeCode';
import Table from './Table';

import { CodeBlockContainer, GraphContainer, NodeContainer } from "./Containers";
import d from "../data/data";


const App = () => {
  return (
    <>
      <GlobalStyle />
      <CodeBlockContainer>
        <CodeBlock data={d.codeBlocks[0]} />
        <CodeBlock data={d.codeBlocks[1]} />
      </CodeBlockContainer>
      <GraphContainer>
        <Graph name="Control Flow Graph" image={d.graph1} />
        <Graph name="Dominator Tree" image={d.graph2} />
      </GraphContainer>
      {d.nodeSection.map((item, i) => (
        <NodeContainer key={i}>
          <NodeCode data={item.code} />
          <Table data={item.table} />
        </NodeContainer>
      ))}
    </>
  );
}

export default App;
