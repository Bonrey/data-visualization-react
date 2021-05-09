import { Container, Code } from "./CodeBlock";


const NodeCode = ({ data }) => {
  return (
    <Container wider>
      <Code>
        <p>{data[0][0]}</p>
        <pre>{`\t${data[0][1]}`}</pre>
      </Code>
      {data[1].map((block, index) => (
        <Code key={index}>
          {String.fromCharCode(65 + index)}-block<br />
          {block.map((line, index) => {
            return (
              <div key={index}>
                <pre>{`\t${line}`}</pre>
              </div>
            );
          })}
        </Code>
      ))}
      <Code>
        <p>{data[data.length - 1][0]}</p>
        <pre>{`\t${data[data.length - 1][1]}`}</pre>
      </Code>
    </Container>
  );
}

export default NodeCode;
