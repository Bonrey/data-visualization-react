import data from './data.json';
import graph1 from '../assets/images/draw_planar_1.png';
import graph2 from '../assets/images/draw_planar_1.png';

const sections = ['codeBlocks', 'nodeSection'/*, 'varSection', 'phiSection'*/];
let d = { graph1: graph1, graph2: graph2 };

for (let section of sections) {
  d[section] = [];
  for (let i = 0; i < data[section].length; i++) {
    d[section].push(
      section === 'codeBlocks' ? data[section][i] :
      { "code": data[section][i].code, "table": getTable(data[section][i].table) }
    );
  }
}

function getTable(old) {
  let res = [];
  const numberOfLines = old[Object.keys(old)[0]].length;

  res.push([]);
  for (let prop in old) {
    res[0].push(prop);
  }

  for (let line = 1; line <= numberOfLines; line++) {
    res.push([]);
    for (let prop in old) {
      res[line].push(old[prop][line - 1]);
    }
  }
  
  return res;
}

export default d;
