import Axios from 'axios';
import libxmljs from 'libxmljs';
// import parseXml from 'libxmljs';
async function buscarFrete( 
                          nCdServico,
                          sCepOrigem,
                          sCepDestino,
                          nVlPeso,
                          nCdFormato,
                          nVlComprimento,
                          nVlAltura,
                          nVlLargura,
                          nVlDiametro){
    let response
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
    nVlDiametro};
    const headers = { 
        'Authorization': 'Bearer my-token',
        'My-Custom-Header': 'foobar',
    };
    response = await Axios.get(url, data, { headers })

    let dados = new libxmljs.parseXml(response.data);
    saveXML(dados);
    // console.log(data);
    return response.data
}
//08082650
//564321

buscarFrete()