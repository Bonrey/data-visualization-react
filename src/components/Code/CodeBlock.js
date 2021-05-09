import styled from "styled-components";


export const Container = styled.div`
  background-color: hsl(0, 0%, 97%);
  border: 1.5rem solid hsl(0, 0%, 97%);
  padding: 0.5rem 0;
  border-radius: 0.5rem;
  width: ${props => props.wider ? "25rem" : "20rem"};
  overflow-x: auto;
  margin: 0 5rem;
`

export const Code = styled.code`
  display: block;
  line-height: 0.5rem;
  font-size: 1rem;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`


const CodeBlock = ({ data }) => {
  let count = 1;
  return (
    <Container>
      <Code>Entry</Code>
      {data.map((block, i1) => {
        return (
          <Code key={i1}>
            Block {String.fromCharCode(65 + i1)} [{block.length}]<br />
            {block.map((line, i2) => {
              return (
                <div key={i2}>
                  <pre>({count++})    {line}</pre>
                </div>
              );
            })}
          </Code>
        );
      })}
      <Code>Exit</Code>
    </Container>
  );
}

export default CodeBlock;
