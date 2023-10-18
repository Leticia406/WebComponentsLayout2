class Produtos {
    id;
    descricao;
    imagem;
    preco;
    constructor(id, desc, preco, imagem) {
        this.id = id;
        this.descricao = desc;
        this.imagem = imagem;
        this.preco = preco;
    }
    getDescricao() {
        return this.descricao;
    }
    getImg() {
        return this.imagem;
    }
    getPreco() {
        return this.preco;
    }
}
export let lista_objetos = [
    new Produtos(1, "Tênis Adidas SuperStar", 300, "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/15f901c90a9549d29104aae700d27efb_9366/Tenis_Superstar_Preto_EG4959_01_standard.jpg"),
    new Produtos(2, "Tênis Adidas Forum Low", 699, "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b7beee7c32d4438aaba3acb6001c2e7b_9366/Tenis_Forum_Low_Branco_FY7757_01_standard.jpg"),
    new Produtos(3, "Tênis Adidas ADI2000", 500, "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/68ef69681fd8477489e4fae7f94aaab7_9366/Tenis_Adi2000_Preto_ID2101_011_hover_standard.jpg"),
    new Produtos(10, "Tênis Adidas Yeezy 500", 300, "https://acdn.mitiendanube.com/stores/001/153/606/products/blush1-a18d284c59d02b926816250006186464-640-0.webp"),
    new Produtos(11, "Tênis Adidas Samba", 699, "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3bbecbdf584e40398446a8bf0117cf62_9366/Tenis_Samba_OG_Branco_B75806_01_standard.jpg"),
    new Produtos(4, "Tênis Nike Air Force", 300, "https://imgnike-a.akamaihd.net/768x768/01113751.jpg"),
    new Produtos(5, "Tênis Nike SB", 699, "https://imgnike-a.akamaihd.net/1920x1920/011580ID.jpg"),
    new Produtos(6, "Tênis Nike Air Max", 500, "https://imgnike-a.akamaihd.net/768x768/007676IE.jpg"),
    new Produtos(7, "Tênis Nike Blazer Low", 300, "https://imgnike-a.akamaihd.net/768x768/02308351.jpg"),
    new Produtos(8, "Tênis Nike Jordan 4", 699, "https://imgnike-a.akamaihd.net/768x768/026416ID.jpg"),
    new Produtos(9, "Tênis Puma Suede", 500, "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/385378/01/sv01/fnd/BRA/w/1000/h/1000/fmt/png"),
    new Produtos(10, "Tênis Puma Air SLIPSTREAM", 300, "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/391763/01/sv01/fnd/BRA/w/1000/h/1000/fmt/png"),
    new Produtos(11, "Tênis Puma CAVEN ", 699, "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/384315/51/sv01/fnd/BRA/w/1000/h/1000/fmt/png"),
    new Produtos(12, "Tênis Puma CALI DREAM LEATHER", 500, "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/392730/01/sv01/fnd/BRA/w/1000/h/1000/fmt/png"),
    new Produtos(10, "Tênis Puma JADA", 300, "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/387692/03/sv01/fnd/BRA/w/1000/h/1000/fmt/png"),
];
