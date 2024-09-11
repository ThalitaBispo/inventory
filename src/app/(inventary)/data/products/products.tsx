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
    }
    
];

export default items;