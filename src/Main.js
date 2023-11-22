let count = 0;
        let dinheiro = 0; // GEOMITRY DASH

        let clickVale = 1;
        let comercioVale = 1;

        let boiPrice = 200;
        let homemPrice = 5;
        let amigoPrice = 250;
        let comercialPrice = 5;
        let finalPrice = 1;

        let comprouofinal = false;

        let subNivel = 0;
        let nivel = 0;
        let nivelAnim = false;

        let nivelDisplay = 0;

        let debug = false;

        function skip() {
            nivelDisplay = nivel;
        }

        setInterval(() => {
                if (debug == false) {
                    if (finalPrice <= 2000000000000) {
                        finalPrice = dinheiro + 0.1;
                    }
                }
                document.getElementById('ex').innerText = nivelDisplay;
                if (nivelAnim) {
                    if (nivelDisplay <= nivel) {
                        nivelDisplay += 1;
                    }
                    if (nivelDisplay == nivel) {
                        nivelAnim = false
                    }
                }
                if (subNivel > 20) {
                    subNivel = 0;
                    nivel += 1;
                }
                updateHUD();
                updateItems();

                addRank("Cool", 20);
                addRank("Master", 40);
                addRank("Sigma", 80);
                addRank("Super Sigma", 120);
                addRank("Super Mega Sigma", 240);
                addRank("SUPER CREEPER", 1000);
                addRank("SKIPIDI", 5000);
                addRank("OR", 10000);
                addRank("SIGMA", 20000);
                addRank("GOD", 40000);
                addRank("JDaniel", 1000000);
                addRank("HACKER", 10000000);
                addRank("CREATER OF THE GAME", 100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
        }, 1);

        function addRank(rankName, rankNive) {
            if (nivelDisplay >= rankNive) {
                document.getElementById('ranked').innerText = rankName;
            }
        }

        function incrementCounter() {
            if (!comprouofinal) {
                count += clickVale;
                subNivel += clickVale / 10;
            }
        }

        function ganharDinheiro() {
            if (!comprouofinal) {
                if(count > 0)
                {
                    count -= comercioVale;
                    dinheiro += comercioVale;
                    if (count < 0) {
                        count = 0;
                    }
                }
            }
        }

        function showOverlay() { document.getElementById('overlay').style.display = 'flex';}
        function hideOverlay() { document.getElementById('overlay').style.display = 'none';}

        function comprarUmTipo(nomeSexy) {
            let add = function(nome,preco, quando) {
                if (nomeSexy == nome) {
                    comprarItem(preco, quando);   
                }
            };

            add("boi",boiPrice,function name() {
                setInterval(() => {
                    incrementCounter();
                }, 1000);

                boiPrice *= 2;
            });

            add("homem",homemPrice,function name() {
                clickVale *= 2;
                homemPrice *= 2;
            });

            add("comercial",comercialPrice,function name() {
                comercioVale *= 2;
                comercialPrice *= 2;
            });

            add("final",finalPrice,function name() {
                document.getElementById('theend').style.display = 'flex';
                nivelAnim = true;

                finalPrice *= 2;
            });

            add("amigo",amigoPrice,function name() {
                setInterval(() => {
                    ganharDinheiro();
                }, 1000);

                amigoPrice *= 2;
            });
        }

        function updateHUD()
        {
            document.getElementById('count').innerText = count;
            document.getElementById('dinheir').innerText = dinheiro;
        }

        function updateItems()
        {
            configItem('itemLegalButton', 'Boi', boiPrice);
            configItem('homemButton', 'Homem', homemPrice);
            configItem('comercialButton', 'Comercial', comercialPrice);
            configItem('finalButton', 'Final', finalPrice);
            configItem('amigoButton', 'Amigo', amigoPrice);
        }

        function configItem(elemento,name,preco)
        {
            let daEle = document.getElementById(elemento);
            daEle.innerText = name + ` (${preco} Dinheiros)`;

            if (dinheiro >= preco) 
            {
                daEle.disabled = false;
            }
            else
            {
                daEle.disabled = true;
            }
        }

        function comprarItem(preco, quandoComprar) {
            if (dinheiro >= preco)
            {
                dinheiro -= preco;

                quandoComprar();
            }
        }