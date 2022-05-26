import Axios from 'axios';
import xml2json from 'xml2json';
const  buscarFrete = async(
    nCdEmpresa,
    sDsSenha, 
    nCdServico,
    sCepOrigem,
    sCepDestino,
    nVlPeso,
    nCdFormato,
    nVlComprimento,
    nVlAltura,
    nVlLargura,
    nVlDiametro) => {
let url = (`http://ws.correios.com.br/calculador/CalcPrecoPrazo.aspx?nCdEmpresa=08082650&sDsSenha=564321&sCepOrigem=${sCepOrigem}&sCepDestino=${sCepDestino}&nVlPeso=${nVlPeso}1&nCdFormato=${nCdFormato}&nVlComprimento=${nVlComprimento}&nVlAltura=${nVlAltura}&nVlLargura=${nVlLargura}&sCdMaoPropria=n&nVlValorDeclarado=0&sCdAvisoRecebimento=n&nCdServico=${nCdServico}&nVlDiametro=${nVlDiametro}&StrRetorno=xml&nIndicaCalculo=3`)
const data = { nCdEmpresa : "",
    sDsSenha : "", 
    nCdServico,
    sCepOrigem,
    sCepDestino,
    nVlPeso,
    nCdFormato,
    nVlComprimento,
    nVlAltura,
    nVlLargura,
    nVlDiametro,
    StrRetorno : "xml"};
const headers = { 
    'Authorization': 'Bearer my-token',
    'My-Custom-Header': 'foobar',
    "Content-Type": "application/xml; charset=utf-8",
};
const response = await Axios.get(url, data, { headers });
const correiosResponse = xml2json.toJson(response.data);
console.log("to json -> %s", correiosResponse);
return correiosResponse;
}
export { buscarFrete };