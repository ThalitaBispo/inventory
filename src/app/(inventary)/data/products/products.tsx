const items = [
    { 
        codigo: '001', 
        nome: 'Tubo Soldável 6m-25mm-3/4', 
        fornecedor1: 'Obramax', 
        preco1: 'R$16,90', 
        fornecedor2: 'Abe da Construção', 
        preco2: 'R$14,71', 
        descricao: ''
    },
    { 
        codigo: '002', 
        nome: 'Bucha de Redução Forte 50mm x 25mm', 
        fornecedor1: 'Obramax', 
        preco1: 'R$2,66', 
        fornecedor2: 'Agropeperi', 
        preco2: 'R$2,26', 
        descricao: ''
    },
    { 
        codigo: '003', 
        nome: 'Caps Fortlev 25mm 3/4', 
        fornecedor1: 'Obramax', 
        preco1: 'R$1,08', 
        fornecedor2: 'Copefer', 
        preco2: 'R$1,78', 
        descricao: ''
    },
    { 
        codigo: '004', 
        nome: 'Joelho 45° Fortlev 3/4', 
        fornecedor1: 'Obramax', 
        preco1: 'R$0,99', 
        fornecedor2: 'Leroy Merlin', 
        preco2: 'R$1,59', 
        descricao: ''
    },
    { 
        codigo: '005', 
        nome: 'Joelho 90° 3/4', 
        fornecedor1: 'Copefer', 
        preco1: 'R$1,20', 
        fornecedor2: 'Leroy Merlin', 
        preco2: 'R$3,01', 
        descricao: ''
    },
    { 
        codigo: '006', 
        nome: 'Luva de correr 3/4', 
        fornecedor1: 'Leroy Merlin', 
        preco1: 'R$12,79', 
        fornecedor2: 'Copefer', 
        preco2: 'R$11,84', 
        descricao: ''
    },
    { 
        codigo: '007', 
        nome: 'Luva soldável 3/4', 
        fornecedor1: 'Leroy Merlin', 
        preco1: 'R$4,90', 
        fornecedor2: 'Hidraouenx', 
        preco2: 'R$3,40', 
        descricao: ''
    },
    { 
        codigo: '008', 
        nome: 'Registro de esfera soldável 3/4', 
        fornecedor1: 'Obramax', 
        preco1: 'R$16,99', 
        fornecedor2: 'Leroy Merlin', 
        preco2: 'R$16,29', 
        descricao: ''
    },
    { 
        codigo: '009', 
        nome: 'Joelho 90° com bucha de latão 3/4 x 1/2', 
        fornecedor1: 'Leroy Merlin', 
        preco1: 'R$3,90', 
        fornecedor2: 'Obramax', 
        preco2: 'R$3,94', 
        descricao: ''
    },
    { 
        codigo: '010', 
        nome: 'Luva soldável com bucha de latão 3/4 x 1/2', 
        fornecedor1: 'Sodimac', 
        preco1: 'R$5,40', 
        fornecedor2: 'Obramax', 
        preco2: 'R$4,17', 
        descricao: ''
    },
    { 
        codigo: '011', 
        nome: 'Te soldável com bucha de latão 3/4 x 1/2', 
        fornecedor1: 'Leroy Merlin', 
        preco1: 'R$8,43', 
        fornecedor2: 'Obramax', 
        preco2: 'R$10,99', 
        descricao: ''
    },
    { 
        codigo: '012', 
        nome: 'Cap Esgoto 40', 
        fornecedor1: 'Leroy Merlin', 
        preco1: 'R$2,61', 
        fornecedor2: 'Obramax', 
        preco2: 'R$1,89', 
        descricao: ''
    },
    { 
        codigo: '013', 
        nome: 'Cap Esgoto 50', 
        fornecedor1: 'Leroy Merlin', 
        preco1: 'R$3,50', 
        fornecedor2: 'Sodimac', 
        preco2: 'R$6,90', 
        descricao: ''
    },
    { 
        codigo: '014', 
        nome: 'Cap Esgoto 75', 
        fornecedor1: 'Leroy Merlin', 
        preco1: 'R$11,43', 
        fornecedor2: 'Sodimac', 
        preco2: 'R$10,90', 
        descricao: ''
    },
    { 
        codigo: '015', 
        nome: 'Cap Esgoto 100', 
        fornecedor1: 'Leroy Merlin', 
        preco1: 'R$7,59', 
        fornecedor2: 'Sodimac', 
        preco2: 'R$9,77', 
        descricao: ''
    },
    { 
        codigo: '016', 
        nome: 'Joelho 45° Esgoto 40', 
        fornecedor1: 'Leroy Merlin', 
        preco1: 'R$2,30', 
        fornecedor2: 'Obramax', 
        preco2: 'R$3,79', 
        descricao: ''
    },
    { 
        codigo: '017', 
        nome: 'Joelho 45° Esgoto 50', 
        fornecedor1: 'Leroy Merlin', 
        preco1: 'R$2,39', 
        fornecedor2: 'Ferramentas Kennedy', 
        preco2: 'R$4,39', 
        descricao: ''
    },
    { 
        codigo: '018', 
        nome: 'Joelho 45° Esgoto 75', 
        fornecedor1: 'Leroy Merlin', 
        preco1: 'R$5,99', 
        fornecedor2: 'Ferramentas Kennedy', 
        preco2: 'R$6,90', 
        descricao: ''
    },
    { 
        codigo: '019', 
        nome: 'Joelho 45° Esgoto 100', 
        fornecedor1: 'Leroy Merlin', 
        preco1: 'R$7,00', 
        fornecedor2: 'Ferramentas Kennedy', 
        preco2: 'R$8,90', 
        descricao: ''
    },
    { 
        codigo: '020', 
        nome: 'Joelho 90° Esgoto 40', 
        fornecedor1: 'Leroy Merlin', 
        preco1: 'R$5,50', 
        fornecedor2: 'Loja Merc', 
        preco2: 'R$5,05', 
        descricao: ''
    },
    { 
        codigo: '021', 
        nome: 'Joelho 90° Esgoto 50', 
        fornecedor1: 'Sodimac', 
        preco1: 'R$2,50', 
        fornecedor2: 'Leroy Merlin', 
        preco2: 'R$1,95', 
        descricao: ''
    },
    { 
        codigo: '022', 
        nome: 'Joelho 90° Esgoto 75', 
        fornecedor1: 'Obramax', 
        preco1: 'R$5,90', 
        fornecedor2: 'Leroy Merlin', 
        preco2: 'R$5,05', 
        descricao: ''
    },
    { 
        codigo: '023', 
        nome: 'Joelho 90° Esgoto 100', 
        fornecedor1: 'Obramax', 
        preco1: 'R$3,99', 
        fornecedor2: 'Leroy Merlin', 
        preco2: 'R$4,90', 
        descricao: ''
    },
    { 
        codigo: '024', 
        nome: 'Redução Excêntrica Esgoto 75 x 50', 
        fornecedor1: 'Leroy Merlin', 
        preco1: 'R$16,90', 
        fornecedor2: 'Loja Merc', 
        preco2: 'R$5,89', 
        descricao: ''
    },
    { 
        codigo: '025', 
        nome: 'Redução Excêntrica Esgoto 100 x 50', 
        fornecedor1: 'Leroy Merlin', 
        preco1: 'R$7,89', 
        fornecedor2: 'Permacon', 
        preco2: 'R$6,90', 
        descricao: ''
    },
    { 
        codigo: '026', 
        nome: 'Redução Excêntrica Esgoto 100 x 75', 
        fornecedor1: 'Loja Merc', 
        preco1: 'R$6,39', 
        fornecedor2: 'Telhado', 
        preco2: 'R$5,76', 
        descricao: ''
    },
    { 
        codigo: '027', 
        nome: 'Caixa Sifonada 3 Entrada Quadrada 100x100x5', 
        fornecedor1: 'Leroy Merlin', 
        preco1: 'R$63,29'
    },
    { 
        codigo: '028', 
        nome: 'Jogo Mesa Jantar Cozinha Quadrada 4 Cadeiras Ferro Resistente C/ Assento Cor Branco Ps Móveis', 
        fornecedor1: 'Mercado Livre', 
        preco1: 'R$467,10', 
        fornecedor2: '', 
        preco2: '', 
        descricao: ''
    },
    {
        codigo: '029',
        nome: 'Tubo Soldável 6m-25mm-3/4',
        fornecedor1: 'Obramax',
        preco1: 'R$16,90',
        fornecedor2: 'Abc da Construção',
        preco2: 'R$14,71',
        descricao: ''
    },
    {
        codigo: '030',
        nome: 'Bucha de Redução Forte 50mm x 25mm',
        fornecedor1: 'Obramax',
        preco1: 'R$2,66',
        fornecedor2: 'Agropeperi',
        preco2: 'R$2,26',
        descricao: ''
    },
    {
        codigo: '031',
        nome: 'Caps Fortlev 25mm 3/4',
        fornecedor1: 'Obramax',
        preco1: 'R$1,08',
        fornecedor2: 'Copefer',
        preco2: 'R$1,78',
        descricao: ''
    },
    {
        codigo: '032',
        nome: 'Joelho 45° Fortlev 3/4',
        fornecedor1: 'Obramax',
        preco1: 'R$0,99',
        fornecedor2: 'Leroy Merlin',
        preco2: 'R$1,59',
        descricao: ''
    },
    {
        codigo: '033',
        nome: 'Joelho 90° 3/4',
        fornecedor1: 'Copefer',
        preco1: 'R$1,20',
        fornecedor2: 'Leroy Merlin',
        preco2: 'R$3,01',
        descricao: ''
    },
    {
        codigo: '034',
        nome: 'Luva de correr 3/4',
        fornecedor1: 'Leroy Merlin',
        preco1: 'R$12,79',
        fornecedor2: 'Copefer',
        preco2: 'R$11,84',
        descricao: ''
    },
    {
        codigo: '035',
        nome: 'Luva soldável 3/4',
        fornecedor1: 'Leroy Merlin',
        preco1: 'R$4,90',
        fornecedor2: 'Hidracounex',
        preco2: 'R$3,40',
        descricao: ''
    },
    {
        codigo: '036',
        nome: 'Registro de esfera soldável 3/4',
        fornecedor1: 'Obramax',
        preco1: 'R$16,99',
        fornecedor2: 'Leroy Merlin',
        preco2: 'R$16,29',
        descricao: ''
    },
    {
        codigo: '037',
        nome: 'Joelho 90° com bucha de latão 3/4 x 1/2',
        fornecedor1: 'Leroy Merlin',
        preco1: 'R$5,89',
        fornecedor2: 'Obramax',
        preco2: 'R$3,90',
        descricao: ''
    },
    {
        codigo: '038',
        nome: 'Luva soldável com bucha de latão 3/4 x 1/2',
        fornecedor1: 'Sodimac',
        preco1: 'R$5,40',
        fornecedor2: 'Obramax',
        preco2: 'R$4,17',
        descricao: ''
    },
    {
        codigo: '039',
        nome: 'Te soldável com bucha de latão 3/4 x 1/2',
        fornecedor1: 'Leroy Merlin',
        preco1: 'R$8,43',
        fornecedor2: 'Obramax',
        preco2: 'R$10,99',
        descricao: ''
    },
    {
        codigo: '040',
        nome: 'Cap Esgoto 40',
        fornecedor1: 'Leroy Merlin',
        preco1: 'R$2,61',
        fornecedor2: 'Obramax',
        preco2: 'R$1,89',
        descricao: ''
    },
    {
        codigo: '041',
        nome: 'Cap Esgoto 50',
        fornecedor1: 'Leroy Merlin',
        preco1: 'R$3,50',
        fornecedor2: 'Sodimac',
        preco2: 'R$6,90',
        descricao: ''
    },
    {
        codigo: '042',
        nome: 'Cap Esgoto 75',
        fornecedor1: 'Leroy Merlin',
        preco1: 'R$11,43',
        fornecedor2: 'Sodimac',
        preco2: 'R$10,90',
        descricao: ''
    },
    {
        codigo: '043',
        nome: 'Cap Esgoto 100',
        fornecedor1: 'Leroy Merlin',
        preco1: 'R$7,59',
        fornecedor2: 'Sodimac',
        preco2: 'R$9,89',
        descricao: ''
    },
    {
        codigo: '044',
        nome: 'Joelho 45° Esgoto 40',
        fornecedor1: 'Leroy Merlin',
        preco1: 'R$2,39',
        fornecedor2: 'Obramax',
        preco2: 'R$3,79',
        descricao: ''
    },
    {
        codigo: '045',
        nome: 'Joelho 45° Esgoto 50',
        fornecedor1: 'Leroy Merlin',
        preco1: 'R$2,39',
        fornecedor2: 'Ferramentas Kennedy',
        preco2: 'R$4,39',
        descricao: ''
    },
    {
        codigo: '046',
        nome: 'Joelho 45° Esgoto 75',
        fornecedor1: 'Leroy Merlin',
        preco1: 'R$5,99',
        fornecedor2: 'Ferramentas Kennedy',
        preco2: 'R$4,79',
        descricao: ''
    },
    {
        codigo: '047',
        nome: 'Joelho 45° Esgoto 100',
        fornecedor1: 'Leroy Merlin',
        preco1: 'R$7,39',
        fornecedor2: 'Obramax',
        preco2: 'R$7,40',
        descricao: ''
    },
    {
        codigo: '048',
        nome: 'Joelho 90° Esgoto 40',
        fornecedor1: 'Leroy Merlin',
        preco1: 'R$5,90',
        fornecedor2: 'Loja Merc',
        preco2: 'R$5,05',
        descricao: ''
    },
    {
        codigo: '049',
        nome: 'Joelho 90° Esgoto 50',
        fornecedor1: 'Sodimac',
        preco1: 'R$2,50',
        fornecedor2: 'Leroy Merlin',
        preco2: 'R$1,95',
        descricao: ''
    },
    {
        codigo: '050',
        nome: 'Joelho 90° Esgoto 75',
        fornecedor1: 'Obramax',
        preco1: 'R$3,79',
        fornecedor2: 'Leroy Merlin',
        preco2: 'R$5,99',
        descricao: ''
    },
    {
        codigo: '051',
        nome: 'Joelho 90° Esgoto 100',
        fornecedor1: 'Obramax',
        preco1: 'R$3,99',
        fornecedor2: 'Leroy Merlin',
        preco2: 'R$5,99',
        descricao: ''
    },
    {
        codigo: '052',
        nome: 'Redução Excêntrica Esgoto 75 x 50',
        fornecedor1: 'Leroy Merlin',
        preco1: 'R$6,19',
        fornecedor2: 'Loja Merc',
        preco2: 'R$5,89',
        descricao: ''
    },
    {
        codigo: '053',
        nome: 'Redução Excêntrica Esgoto 100 x 50',
        fornecedor1: 'Leroy Merlin',
        preco1: 'R$7,89',
        fornecedor2: 'Permacon',
        preco2: 'R$6,90',
        descricao: ''
    },
    {
        codigo: '054',
        nome: 'Redução Excêntrica Esgoto 100 x 75',
        fornecedor1: 'Loja Merc',
        preco1: 'R$6,39',
        fornecedor2: 'Telhado',
        preco2: 'R$5,76',
        descricao: ''
    },
    {
        codigo: '055',
        nome: 'Caixa Sifonada 3 Entrada Quadrada 100x100x50',
        fornecedor1: 'Leroy Merlin',
        preco1: 'R$63,29',
        fornecedor2: 'Ferramentas Kennedy',
        preco2: 'R$23,99',
        descricao: ''
    },
    {
        codigo: '056',
        nome: 'Cimento CPII E-32 25Kg',
        fornecedor1: 'Obramax',
        preco1: 'R$18,90',
        fornecedor2: 'Obramax',
        preco2: 'R$18,90',
        descricao: 'https://onedrive.live.com/edit?id=CFB8CCDA026D122E!1159'
    },
    {
        codigo: '057',
        nome: 'Cimento CPII E-32 50Kg',
        preco: 'R$28,90',
        fornecedor1: 'Obramax',
        descricao: 'https://docs.google.com/presentation/d/1bO1B9IOpKFyCBKP'
    },
    {
        codigo: '058',
        nome: 'Cimento CP II-F 50kg',
        preco: 'R$31,90',
        fornecedor1: 'Leroy-Merlin',
        descricao: 'https://drive.google.com/file/d/1VW9OMg1ZRoWoPKUIZSKfqmF'
    },
    {
        codigo: '059',
        nome: 'Cimento CPIII 32RS 50Kg',
        preco: 'R$27,90',
        fornecedor1: 'Obramax',
        descricao: 'https://docs.google.com/presentation/d/13WsC4SS1YHDCEA8'
    },
    {
        codigo: '060',
        nome: 'Cimento CP V 40kg',
        preco: 'R$31,90',
        fornecedor1: 'Obramax',
        descricao: 'https://docs.google.com/presentation/d/1G1oowFni19z3WS'
    },
    {
        codigo: '061',
        nome: 'Cimento CPB -40 15kg',
        preco1: 'R$68,90',
        fornecedor1: 'Leroy-Merlin',
        descricao: 'https://docs.google.com/presentation/d/1RSlraAPU95qtPHgxO2zmoRT8Cy0nFR'
    },
    {
        codigo: '062',
        nome: 'Cimento CPII E-32 25Kg',
        preco1: 'R$19,90',
        fornecedor1: 'Telhanorte',
        descricao: 'https://onedrive.live.com/edit?id=CFB8CCDA026D122E!1159&resid=CFB8CCD'
    },
    {
        codigo: '063',
        nome: 'Cimento CPII E-32 50Kg',
        preco1: 'R$30,90',
        fornecedor1: 'Telhanorte',
        descricao: 'https://docs.google.com/presentation/d/1bO1B9IOpKFyCBKP-FWjQ8cmdzQR8d'
    },
    {
        codigo: '064',
        nome: 'Cimento CP II-F 50kg',
        preco1: 'R$35,99',
        fornecedor1: 'Joli',
        descricao: 'https://drive.google.com/file/d/1VW9OMg1ZRoWoPKUIZSKfqmFA9U_gyCDz/view'
    },
    {
        codigo: '065',
        nome: 'Cimento CPIII 32RS 50Kg',
        preco1: 'R$26,90',
        fornecedor1: 'Leroy Merlin',
        descricao: 'https://docs.google.com/presentation/d/13WsC4SS1YHDCEA8_b2vrtq4754InKE'
    },
    {
        codigo: '066',
        nome: 'Cimento CP V 40kg',
        preco1: 'R$30,20',
        fornecedor1: 'Constrular',
        descricao: 'https://docs.google.com/presentation/d/1G1oowFni19z3WSdiQHyC5FnMC6scs5'
    },
    {
        codigo: '067',
        nome: 'Cimento CPB -40 15kg',
        preco1: 'R$169,90',
        fornecedor1: 'Mercado Livre',
        descricao: 'https://docs.google.com/presentation/d/1RSlraAPU95qtPHgxO2zmoRT8Cy0nFR'
    },
    {
        codigo: '068',
        nome: '40mm/6m',
        descricao: '1.1/4"',
        preco1: 'R$16,90',
        fornecedor1: 'Amanco'
    },
    {
        codigo: '069',
        nome: '50mm/6m',
        descricao: '1.1/2"',
        preco1: 'R$17,40',
        fornecedor1: 'Amanco'
    },
    {
        codigo: '070',
        nome: '60mm/6m',
        descricao: '2"',
        preco1: 'R$17,70',
        fornecedor1: 'Amanco'
    },
    {
        codigo: '071',
        nome: '75mm/6m',
        descricao: '3"',
        preco1: 'R$18,20',
        fornecedor1: 'Amanco'
    },
    {
        codigo: '072',
        nome: '100mm/6m',
        descricao: '4"',
        preco1: 'R$18,70',
        fornecedor1: 'Amanco'
    },
    {
        codigo: '073',
        nome: '150mm/6m',
        descricao: '6"',
        preco1: 'R$19,20',
        fornecedor1: 'Amanco'
    },
    {
        codigo: '074',
        nome: '40mm/3m',
        preco1: 'R$10,70',
        fornecedor1: 'Amanco'
    },
    {
        codigo: '075',
        nome: '50mm/3m',
        preco1: 'R$11,00',
        fornecedor1: 'Amanco'
    },
    {
        codigo: '076',
        nome: '75mm/3m',
        preco1: 'R$12,00',
        fornecedor1: 'Amanco'
    },
    {
        codigo: '077',
        nome: '100mm/3m',
        preco1: 'R$13,50',
        fornecedor1: 'Amanco'
    },
    {
        codigo: '078',
        nome: '150mm/3m',
        preco1: 'R$14,60',
        fornecedor1: 'Amanco'
    },
    {
        codigo: '079',
        nome: '200mm/3m',
        preco1: 'R$15,15',
        fornecedor1: 'Amanco'
    },
    {
        codigo: '080',
        nome: '200mm/3m',
        preco1: 'R$15,15',
        fornecedor1: 'Amanco'
    },
    {
        codigo: '081',
        nome: 'Cadeira de escritório giratória preta com rodinhas',
        preco1: 'R$259,00',
        fornecedor1: 'Mercado Livre'
    },
    {
        codigo: '082',
        nome: 'Escrivaninha Star Steel Mobile Star mdf/aço de 120cm x 74cm x 45cm preto',
        preco1: 'R$200,03',
        fornecedor1: 'Mercado Livre'
    },
    {
        codigo: '083',
        nome: 'Arquivo OF4 de aço com 4 gavetas para pasta suspensa cor cinza',
        preco1: 'R$885,74',
        fornecedor1: 'Mercado Livre'
    },
    {
        codigo: '084',
        nome: 'Inovatto Grp8/12 Cacifo de aço clássico',
        preco1: 'R$1050,60',
        fornecedor1: 'Mercado Livre'
    },
    {
        codigo: '085',
        nome: 'Banqueta Alta Redonda Bar Balcão Cozinha Banco Madeira',
        preco1: 'R$69,51',
        fornecedor1: 'Mercado Livre'
    },
    {
        codigo: '086',
        nome: 'Bebedouro de água Karina Bebedouros k40i aço inoxidável',
        preco1: 'R$892,06',
        fornecedor1: 'Mercado Livre'
    },
    {
        codigo: '087',
        nome: 'Microondas Electrolux Cor Branco',
        preco1: 'R$605,45',
        fornecedor1: 'Mercado Livre'
    },     
    {
        codigo: '088',
        nome: 'Geladeira com freezer cônsul CRD37 com capacidade 334L branco',
        preco1: 'R$2249,00',
        fornecedor1: 'Mercado Livre'
    },
    {
        codigo: '089',
        nome: 'Mesa Articulada Escrivaninha Suspensa',
        preco1: 'R$165,32',
        fornecedor1: 'Mercado Livre'
    },
    {
        codigo: '090',
        nome: 'Mesa Articulada Escrivaninha Suspensa',
        preco1: 'R$165,32',
        fornecedor1: 'Mercado Livre'
    },
    {
        codigo: '091',
        nome: 'Balcão De Cozinha E Lavanderia Com 2 Portas 0,70m Top Class Branco - Batrol',
        preco1: 'R$219,00',
        fornecedor1: 'Mercado Livre'
    },
    {
        codigo: '092',
        nome: 'Caixa Plástica Hortifruti Agrícola Alta Reforçada Organizadora',
        preco1: 'R$19,97',
        fornecedor1: 'Mercado Livre'
    },
    {
        codigo: '093',
        nome: 'Estaleiro Reforçado Para Tubos PVC Defofo',
        preco1: 'R$5000,00',
        fornecedor1: 'Mercado Livre'
    }
];

export default items;