import styled from "styled-components";

const TableContainer = styled.table`
  border-collapse: collapse;
  /* width: 22rem; */
  overflow: auto;
`

const THeading = styled.th`
  border: 0.125rem solid black;
  text-align: center;
  padding: 0.5rem;
  background-color: hsl(0, 0%, 90%);
`

const TData = styled.td`
  border: 0.125rem solid black;
  text-align: center;
  padding: 0.5rem;
`


const Table = ({ data }) => {
  return (
    <TableContainer>
      <thead>
        <tr>
          {data[0].map((item, i) => (
            <THeading key={i}>{item}</THeading>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.slice(1).map((row, i1) => (
          <tr key={i1}>
            {row.map((cell, i2) => (
              <TData key={i2}>{cell}</TData>
            ))}
          </tr>
        ))}
      </tbody>
    </TableContainer>
  );
}

export default Table;
