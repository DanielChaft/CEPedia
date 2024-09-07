let dados = [
    {
        uf: "SP",
        descricao: "O Estado de São Paulo está localizado na região Sudeste do Brasil. A capital é São Paulo e a sigla SP. Área de 248.219,485 quilômetros quadrados.",
        site: "https://www.saopaulo.sp.gov.br/",
        mapa: "https://static.todamateria.com.br/upload/ma/pa/mapasaopaulo2-cke.jpg"
        // Faixa de CEP: 01000-000 a 19999-999
    },
    {
        uf: "RJ",
        descricao: "O Estado do Rio de Janeiro está localizado na região Sudeste do Brasil. A capital é Rio de Janeiro e a sigla RJ. Área de 43.696,054 quilômetros quadrados.",
        site: "https://www.rj.gov.br/",
        mapa: "https://media.istockphoto.com/id/949350462/pt/vetorial/rio-de-janeiro-administrative-an-political-map-with-flag.jpg?s=612x612&w=0&k=20&c=QQY3GviV7U4mmHUsn5OiAVE0wxgQzz1Y_J8jILmnklc="
        // Faixa de CEP: 20000-000 a 28999-999
    },
    {
        uf: "MG",
        descricao: "O Estado de Minas Gerais está localizado na região Sudeste do Brasil. A capital é Belo Horizonte e a sigla MG. Área de 586.521,123 quilômetros quadrados.",
        site: "https://www.mg.gov.br/",
        mapa: "https://escolaeducacao.com.br/wp-content/uploads/2019/11/mapa-politico-minas.jpg"
        // Faixa de CEP: 30000-000 a 39999-999
    },
    {
        uf: "ES",
        descricao: "O Estado do Espírito Santo está localizado na região Sudeste do Brasil. A capital é Vitória e a sigla ES. Área de 46.095,583 quilômetros quadrados.",
        site: "https://www.es.gov.br/",
        mapa: "https://setur.es.gov.br/Media/Setur/Setur/Estado.png"
        // Faixa de CEP: 29000-000 a 29999-999
    },
    {
        uf: "RS",
        descricao: "O Estado do Rio Grande do Sul está localizado na região Sul do Brasil. A capital é Porto Alegre e a sigla RS. Área de 281.748,538 quilômetros quadrados.",
        site: "https://www.rs.gov.br/",
        mapa: "https://media.istockphoto.com/id/949362346/pt/vetorial/rio-grande-do-sul-colorful-administrative-and-political-map-with-flag.jpg?s=612x612&w=0&k=20&c=a7AYercplClfN31e1Q-N-7-aHtgDQ6IM9bNnMsFT5WM="
        // Faixa de CEP: 90000-000 a 99999-999
    },
    {
        uf: "SC",
        descricao: "O Estado de Santa Catarina está localizado na região Sul do Brasil. A capital é Florianópolis e a sigla SC. Área de 95.346,181 quilômetros quadrados.",
        site: "https://www.sc.gov.br/",
        mapa: "https://media.istockphoto.com/id/949362318/pt/vetorial/santa-catarina-administrative-and-political-map-with-flag.jpg?s=612x612&w=0&k=20&c=sHMSWzC_IsZ_WwLivne6Yuz-3G-sRfrzGytvZGUW7mQ="
        // Faixa de CEP: 88000-000 a 89999-999
    },
    {
        uf: "PR",
        descricao: "O Estado do Paraná está localizado na região Sul do Brasil. A capital é Curitiba e a sigla PR. Área de 199.307,922 quilômetros quadrados.",
        site: "https://www.pr.gov.br/",
        mapa: "https://thumbs.dreamstime.com/z/mapa-administrativo-e-pol%C3%ADtico-de-parana-com-bandeira-90322888.jpg?w=768"
        // Faixa de CEP: 80000-000 a 87999-999
    },
    {
        uf: "BA",
        descricao: "O Estado da Bahia está localizado na região Nordeste do Brasil. A capital é Salvador e a sigla BA. Área de 564.733,177 quilômetros quadrados.",
        site: "https://www.ba.gov.br/",
        mapa: "https://media.istockphoto.com/id/949350454/pt/vetorial/bahia-administrative-and-political-map-with-flag.jpg?s=612x612&w=0&k=20&c=C9_jqYDS_dL78hElRbddjinaBESstcYKyVTCKeRUTJw="
        // Faixa de CEP: 40000-000 a 48999-999
    },
    {
        uf: "PE",
        descricao: "O Estado de Pernambuco está localizado na região Nordeste do Brasil. A capital é Recife e a sigla PE. Área de 98.311,616 quilômetros quadrados.",
        site: "https://www.pe.gov.br/",
        mapa: "https://media.istockphoto.com/id/960516764/pt/vetorial/pernambuco-administrative-and-political-map-with-flag.jpg?s=170667a&w=0&k=20&c=4NE9zo-cMDHpQhcXglB11kPmJ5LnUjAFtBJ1CLA2qW0="
        // Faixa de CEP: 50000-000 a 56999-999
    },
    {
        uf: "CE",
        descricao: "O Estado do Ceará está localizado na região Nordeste do Brasil. A capital é Fortaleza e a sigla CE. Área de 148.920,472 quilômetros quadrados.",
        site: "https://www.ceara.gov.br/",
        mapa: "https://media.istockphoto.com/id/949359788/pt/vetorial/ceara-administrative-and-political-map-with-flag.jpg?s=612x612&w=0&k=20&c=daLPyXQG6dOzLPvTwGQJlpp2DXTdn3pJ9ITSCVK4vnI="
        // Faixa de CEP: 60000-000 a 63999-999
    },
    {
        uf: "MA",
        descricao: "O Estado do Maranhão está localizado na região Nordeste do Brasil. A capital é São Luís e a sigla MA. Área de 331.983,293 quilômetros quadrados.",
        site: "https://www.ma.gov.br/",
        mapa: "https://media.istockphoto.com/id/949359802/pt/vetorial/maranhao-administrative-and-political-map-with-flag.jpg?s=612x612&w=0&k=20&c=XS52o9i8COH_-pdgXODBi01srckAn7aRtxZBPcRaLQs="
        // Faixa de CEP: 65000-000 a 65999-999
    },
    {
        uf: "PB",
        descricao: "O Estado da Paraíba está localizado na região Nordeste do Brasil. A capital é João Pessoa e a sigla PB. Área de 56.469,778 quilômetros quadrados.",
        site: "https://www.pb.gov.br/",
        mapa: "https://st3.depositphotos.com/3687841/14920/v/450/depositphotos_149208228-stock-illustration-paraiba-administrative-and-political-map.jpg"
        // Faixa de CEP: 58000-000 a 58999-999
    },
    {
        uf: "RN",
        descricao: "O Estado do Rio Grande do Norte está localizado na região Nordeste do Brasil. A capital é Natal e a sigla RN. Área de 52.797,065 quilômetros quadrados.",
        site: "https://www.rn.gov.br/",
        mapa: "https://thumbs.dreamstime.com/z/mapa-administrativo-e-pol%C3%ADtico-do-rio-grande-do-norte-com-bandeira-90725614.jpg?w=992"
        // Faixa de CEP: 59000-000 a 59999-999
    },
    {
        uf: "PI",
        descricao: "O Estado do Piauí está localizado na região Nordeste do Brasil. A capital é Teresina e a sigla PI. Área de 251.529,186 quilômetros quadrados.",
        site: "https://www.pi.gov.br/",
        mapa: "https://thumbs.dreamstime.com/z/mapa-administrativo-e-pol%C3%ADtico-de-piaui-com-bandeira-90375796.jpg?w=576"
        // Faixa de CEP: 64000-000 a 64999-999
    },
    {
        uf: "AL",
        descricao: "O Estado de Alagoas está localizado na região Nordeste do Brasil. A capital é Maceió e a sigla AL. Área de 27.767,661 quilômetros quadrados.",
        site: "https://www.al.gov.br/",
        mapa: "https://thumbs.dreamstime.com/z/administrativ-de-alagoas-e-mapa-pol%C3%ADtico-com-bandeira-90146152.jpg?w=992"
        // Faixa de CEP: 57000-000 a 57999-999
    },
    {
        uf: "SE",
        descricao: "O Estado de Sergipe está localizado na região Nordeste do Brasil. A capital é Aracaju e a sigla SE. Área de 21.918,454 quilômetros quadrados.",
        site: "https://www.se.gov.br/",
        mapa: "https://emgetis.se.gov.br/wp-content/uploads/2019/09/mapa-sergipe.png"
        // Faixa de CEP: 49000-000 a 49999-999
    },
    {
        uf: "GO",
        descricao: "O Estado de Goiás está localizado na região Centro-Oeste do Brasil. A capital é Goiânia e a sigla GO. Área de 340.111,376 quilômetros quadrados.",
        site: "https://www.goias.gov.br/",
        mapa: "https://media.istockphoto.com/id/949359786/pt/vetorial/goias-administrative-and-political-map-with-flag.jpg?s=612x612&w=0&k=20&c=HmNi6B3CvRowLRzp4jGXVwxt8tsHEUEgqPghPoctEIs="
        // Faixa de CEP: 69300-000 a 69399-999 e de 73700-000 a 76799-999
    },
    {
        uf: "DF",
        descricao: "O Distrito Federal está localizado na região Centro-Oeste do Brasil. A capital é Brasília e a sigla DF. Área de 5.802,823 quilômetros quadrados.",
        site: "https://www.df.gov.br/",
        mapa: "https://s3.static.brasilescola.uol.com.br/be/2021/05/mapa-df.jpg"
        // Faixa de CEP: 70000-000 a 72799-999 e de 73000-000 a 73699-999
    },
    {
        uf: "MT",
        descricao: "O Estado de Mato Grosso está localizado na região Centro-Oeste do Brasil. A capital é Cuiabá e a sigla MT. Área de 903.357,908 quilômetros quadrados.",
        site: "https://www.mt.gov.br/",
        mapa: "https://media.istockphoto.com/id/949375480/pt/vetorial/mato-grosso-administrative-and-political-map-with-flag.jpg?s=612x612&w=0&k=20&c=g8m6TPBrUEVK4zTa9-ckvQdeW1myKInStRp7XVpyt0c="
        // Faixa de CEP: 78000-000 a 78899-999
    },
    {
        uf: "MS",
        descricao: "O Estado de Mato Grosso do Sul está localizado na região Centro-Oeste do Brasil. A capital é Campo Grande e a sigla MS. Área de 357.145,532 quilômetros quadrados.",
        site: "https://www.ms.gov.br/",
        mapa: "https://media.istockphoto.com/id/949375480/pt/vetorial/mato-grosso-administrative-and-political-map-with-flag.jpg?s=612x612&w=0&k=20&c=g8m6TPBrUEVK4zTa9-ckvQdeW1myKInStRp7XVpyt0c="
        // Faixa de CEP: 79000-000 a 79999-999
    },
    {
        uf: "AM",
        descricao: "O Estado do Amazonas está localizado na região Norte do Brasil. A capital é Manaus e a sigla AM. Área de 1.559.161,682 quilômetros quadrados.",
        site: "https://www.am.gov.br/",
        mapa: "https://media.istockphoto.com/id/949359690/vector/amazonas-administrative-and-political-map-with-flag.jpg?s=612x612&w=0&k=20&c=eUqS3p0kns2E0DdljLJE_kLfiO6_LMn7XBBkZDuk70E="
        // Faixa de CEP: 69000-000 a 69299-999 e de 69400-000 a 69899-999
    },
    {
        uf: "PA",
        descricao: "O Estado do Pará está localizado na região Norte do Brasil. A capital é Belém e a sigla PA. Área de 1.247.689,515 quilômetros quadrados.",
        site: "https://www.pa.gov.br/",
        mapa: "https://media.istockphoto.com/id/949375480/pt/vetorial/mato-grosso-administrative-and-political-map-with-flag.jpg?s=612x612&w=0&k=20&c=g8m6TPBrUEVK4zTa9-ckvQdeW1myKInStRp7XVpyt0c="
        // Faixa de CEP: 66000-000 a 68899-999
    },
    {
        uf: "RR",
        descricao: "O Estado de Roraima está localizado na região Norte do Brasil. A capital é Boa Vista e a sigla RR. Área de 224.300,506 quilômetros quadrados.",
        site: "https://www.rr.gov.br/",
        mapa: "https://thumbs.dreamstime.com/z/mapa-administrativo-e-pol%C3%ADtico-de-roraima-com-bandeira-90739660.jpg?w=576"
        // Faixa de CEP: 69300-000 a 69399-999
    },
    {
        uf: "AP",
        descricao: "O Estado do Amapá está localizado na região Norte do Brasil. A capital é Macapá e a sigla AP. Área de 142.828,521 quilômetros quadrados.",
        site: "https://www.ap.gov.br/",
        mapa: "https://media.istockphoto.com/id/949375434/pt/vetorial/amapa-administrative-and-political-map-with-flag.jpg?s=612x612&w=0&k=20&c=mz_HWzgFPML00D-ehZiRBw27n7RI_vxc7jah0vmwh0o="
        // Faixa de CEP: 68900-000 a 68999-999
    },
    {
        uf: "AC",
        descricao: "O Estado do Acre está localizado na região Norte do Brasil. A capital é Rio Branco e a sigla AC. Área de 164.123,040 quilômetros quadrados.",
        site: "https://www.ac.gov.br/",
        mapa: "https://thumbs.dreamstime.com/z/mapa-administrativo-e-pol%C3%ADtico-do-acre-com-bandeira-90146323.jpg?w=992"
        // Faixa de CEP: 69900-000 a 69999-999
    },
    {
        uf: "RO",
        descricao: "O Estado de Rondônia está localizado na região Norte do Brasil. A capital é Porto Velho e a sigla RO. Área de 237.765,293 quilômetros quadrados.",
        site: "https://www.ro.gov.br/",
        mapa: "https://thumbs.dreamstime.com/z/mapa-administrativo-e-pol%C3%ADtico-de-rondonia-com-bandeira-90725499.jpg?w=768"
        // Faixa de CEP: 76800-000 a 76999-999 e de 78900-000 a 78999-999
    },
    {
        uf: "TO",
        descricao: "O Estado do Tocantins está localizado na região Norte do Brasil. A capital é Palmas e a sigla TO. Área de 277.720,520 quilômetros quadrados.",
        site: "https://www.to.gov.br/",
        mapa: "https://media.istockphoto.com/id/949362330/pt/vetorial/tocantins-administrative-and-political-map-with-flag.jpg?s=612x612&w=0&k=20&c=3zAGduEqE1GI5Gxi5DlW5uTsKf1tKe3LbyHr1_2iHoo="
        // Faixa de CEP: 77000-000 a 77999-999
    }
]