const tbl = (id, rows) => `<table id="${id}">\n${rows.join('\n')}\n</table>`;
const toRows = (data, maxDepth) => data.map(r => {
	let l = r.search(/[^\t]/), b = r.split(': '), last = b.pop().replace(/\t+/, ''), m = r.split(': ').length;
	return `<tr>${lcell(l)}${b.map(v => `<td>${v.replace(/^\t*/, '')}</td>`).join('')}${rcell(maxDepth - (l + m) + 1, last)}</tr>`
});
const lcell = l => 0 < l ? `<td colspan="${l}"></td>` : '';
const rcell = (r, v) => `<td colspan="${r}">${v}</td>`;
const getDepth = data => data.map(r => r.search(/[^\t]/) + r.split(': ').length).reduce((a,b)=>Math.max(a,b), 0);
const toTbl = (id, data) => tbl(id, toRows(data, getDepth(data)));
module.exports = exports = obj2tbl = (id, obj) => {
	let json = JSON.stringify(obj, null, '\t')
	.replace(/(\[|{)\n\t*/mgi, '')
	.split(/[\r\n]/mgi)
	.reduce((a, v) => ((a, r) => (r === '' ? void 0 : a.push(r), a))(a, v.replace(/(\t*(]|}),?|: (\[|{)|,)$/gmi, '').replace(/^\t/, '')) , []);
	json.shift();
	return toTbl(id, json);
};