        // Data do formulário
        const date = new Date();

        const ano = date.getFullYear();
        const mes = date.getMonth() + 1;
        const dia = date.getDate();
        var data = dia + "/" + mes + "/" + ano;

        window.onload = initPage; // Faz a função no carregamento da página
        function initPage() {
            document.getElementById("data").innerHTML = data;
        }
        // ---------------------------------------------------------------------------------------Começo
        function atualizouSelect1() { // Estrutura para alterar os valores dos produtos
            
            let select = document.querySelector('#comprasCantina1');
            let optionValue = select.options[select.selectedIndex];

            let value = optionValue.value;

            let selectQuant = document.querySelector('#quantidadeCantina1');
            let optionValueQuant = selectQuant.options[selectQuant.selectedIndex];

            let valueQuant = optionValueQuant.value;

            var salgado = 6.00;
            var refrigerante = 5.00;
            var picole = 2.5;
            var chiclete = 0.25;
            var valorTotal = 0.00;

            // Quando produto não selecionado desativa a opção de escolher quantidade
            var elementVar = document.getElementById("quantidadeCantina1");

            if (value != 'produtoNaoSelecionado1') {
                elementVar.removeAttribute("disabled", "");
            } else {
                elementVar.setAttribute("disabled", "");
            }

            // Quando produto não selecionado, retira o valor aplicado
            if (value == "produtoNaoSelecionado1") {
                valorTotal = 'Quantidade';
                document.getElementById("valor1").innerHTML = "Valor";

                // Quando produto não selecionado, retira a quantidade aplicada
                const elementoSelecionado = document.querySelector("#quantidadeCantina1");
                elementoSelecionado.value = "quantidadeNaoSelecionada1";
            }

            if (valueQuant != 'quantidadeNaoSelecionada1' && value != "produtoNaoSelecionado1") {
                $('.inputValor1').addClass('inputValorAmarelo');
                $('.displayTrue2').removeClass('displayNone');

            } else {
                $('.inputValor1').removeClass('inputValorAmarelo');
                $('.displayTrue2').addClass('displayNone');
                $('.displayTrue3').addClass('displayNone');
                $('.displayTrue4').addClass('displayNone');
            }

            if (valueQuant != "quantidadeNaoSelecionada1") {
                if (value == 'salgado1') {
                    valorTotal = salgado * valueQuant;
                    document.getElementById("valor1").innerHTML = "R$" + valorTotal;
                } else {
                    if (value == 'refrigerante1') {
                        valorTotal = refrigerante * valueQuant;
                        document.getElementById("valor1").innerHTML = "R$" + valorTotal;
                    } else {
                        if (value == 'picole1') {
                            valorTotal = picole * valueQuant;
                            document.getElementById("valor1").innerHTML = "R$" + valorTotal;
                        } else {
                            if (value == 'chiclete1') {
                                valorTotal = chiclete * valueQuant;
                                document.getElementById("valor1").innerHTML = "R$" + valorTotal;
                            }
                        }
                    }
                }
            }
        }
        // ---------------------------------------------------------------------------------------Fim
        // ---------------------------------------------------------------------------------------Começo
        function atualizouSelect2() { // Estrutura para alterar os valores dos produtos
            
            let select = document.querySelector('#comprasCantina2');
            let optionValue = select.options[select.selectedIndex];

            let value = optionValue.value;

            let selectQuant = document.querySelector('#quantidadeCantina2');
            let optionValueQuant = selectQuant.options[selectQuant.selectedIndex];

            let valueQuant = optionValueQuant.value;

            var salgado = 6.00;
            var refrigerante = 5.00;
            var picole = 2.5;
            var chiclete = 0.25;
            var valorTotal = 0.00;

            // Quando produto não selecionado desativa a opção de escolher quantidade
            var elementVar = document.getElementById("quantidadeCantina2");

            if (value != 'produtoNaoSelecionado2') {
                elementVar.removeAttribute("disabled", "");
            } else {
                elementVar.setAttribute("disabled", "");
            }

            // Quando produto não selecionado, retira o valor aplicado
            if (value == "produtoNaoSelecionado2") {
                valorTotal = 'Quantidade';
                document.getElementById("valor2").innerHTML = "Valor";

                // Quando produto não selecionado, retira a quantidade aplicada
                const elementoSelecionado = document.querySelector("#quantidadeCantina2");
                elementoSelecionado.value = "quantidadeNaoSelecionada2";
            }

            if (valueQuant != 'quantidadeNaoSelecionada2' && value != "produtoNaoSelecionado2") {
                $('.inputValor2').addClass('inputValorAmarelo');
                $('.displayTrue3').removeClass('displayNone');

            } else {
                $('.inputValor2').removeClass('inputValorAmarelo');
                $('.displayTrue3').addClass('displayNone');
                $('.displayTrue4').addClass('displayNone');
            }

            if (valueQuant != "quantidadeNaoSelecionada2") {
                if (value == 'salgado2') {
                    valorTotal = salgado * valueQuant;
                    document.getElementById("valor2").innerHTML = "R$" + valorTotal;
                } else {
                    if (value == 'refrigerante2') {
                        valorTotal = refrigerante * valueQuant;
                        document.getElementById("valor2").innerHTML = "R$" + valorTotal;
                    } else {
                        if (value == 'picole2') {
                            valorTotal = picole * valueQuant;
                            document.getElementById("valor2").innerHTML = "R$" + valorTotal;
                        } else {
                            if (value == 'chiclete2') {
                                valorTotal = chiclete * valueQuant;
                                document.getElementById("valor2").innerHTML = "R$" + valorTotal;
                            }
                        }
                    }
                }
            }
        }
        // ---------------------------------------------------------------------------------------Fim
        // ---------------------------------------------------------------------------------------Começo
        function atualizouSelect3() { // Estrutura para alterar os valores dos produtos
            
            let select = document.querySelector('#comprasCantina3');
            let optionValue = select.options[select.selectedIndex];

            let value = optionValue.value;

            let selectQuant = document.querySelector('#quantidadeCantina3');
            let optionValueQuant = selectQuant.options[selectQuant.selectedIndex];

            let valueQuant = optionValueQuant.value;

            var salgado = 6.00;
            var refrigerante = 5.00;
            var picole = 2.5;
            var chiclete = 0.25;
            var valorTotal = 0.00;

            // Quando produto não selecionado desativa a opção de escolher quantidade
            var elementVar = document.getElementById("quantidadeCantina3");

            if (value != 'produtoNaoSelecionado3') {
                elementVar.removeAttribute("disabled", "");
            } else {
                elementVar.setAttribute("disabled", "");
            }

            // Quando produto não selecionado, retira o valor aplicado
            if (value == "produtoNaoSelecionado3") {
                valorTotal = 'Quantidade';
                document.getElementById("valor3").innerHTML = "Valor";

                // Quando produto não selecionado, retira a quantidade aplicada
                const elementoSelecionado = document.querySelector("#quantidadeCantina3");
                elementoSelecionado.value = "quantidadeNaoSelecionada3";
            }

            if (valueQuant != 'quantidadeNaoSelecionada3' && value != "produtoNaoSelecionado3") {
                $('.inputValor3').addClass('inputValorAmarelo');
                $('.displayTrue4').removeClass('displayNone');

            } else {
                $('.inputValor3').removeClass('inputValorAmarelo');
                $('.displayTrue4').addClass('displayNone');
            }

            if (valueQuant != "quantidadeNaoSelecionada3") {
                if (value == 'salgado3') {
                    valorTotal = salgado * valueQuant;
                    document.getElementById("valor3").innerHTML = "R$" + valorTotal;
                } else {
                    if (value == 'refrigerante3') {
                        valorTotal = refrigerante * valueQuant;
                        document.getElementById("valor3").innerHTML = "R$" + valorTotal;
                    } else {
                        if (value == 'picole3') {
                            valorTotal = picole * valueQuant;
                            document.getElementById("valor3").innerHTML = "R$" + valorTotal;
                        } else {
                            if (value == 'chiclete3') {
                                valorTotal = chiclete * valueQuant;
                                document.getElementById("valor3").innerHTML = "R$" + valorTotal;
                            }
                        }
                    }
                }
            }
        }
        // ---------------------------------------------------------------------------------------Fim
        // ---------------------------------------------------------------------------------------Começo
        function atualizouSelect4() { // Estrutura para alterar os valores dos produtos
            
            let select = document.querySelector('#comprasCantina4');
            let optionValue = select.options[select.selectedIndex];

            let value = optionValue.value;

            let selectQuant = document.querySelector('#quantidadeCantina4');
            let optionValueQuant = selectQuant.options[selectQuant.selectedIndex];

            let valueQuant = optionValueQuant.value;

            var salgado = 6.00;
            var refrigerante = 5.00;
            var picole = 2.5;
            var chiclete = 0.25;
            var valorTotal = 0.00;

            // Quando produto não selecionado desativa a opção de escolher quantidade
            var elementVar = document.getElementById("quantidadeCantina4");

            if (value != 'produtoNaoSelecionado4') {
                elementVar.removeAttribute("disabled", "");
            } else {
                elementVar.setAttribute("disabled", "");
            }

            // Quando produto não selecionado, retira o valor aplicado
            if (value == "produtoNaoSelecionado4") {
                valorTotal = 'Quantidade';
                document.getElementById("valor4").innerHTML = "Valor";

                // Quando produto não selecionado, retira a quantidade aplicada
                const elementoSelecionado = document.querySelector("#quantidadeCantina4");
                elementoSelecionado.value = "quantidadeNaoSelecionada4";
            }

            if (valueQuant != 'quantidadeNaoSelecionada4' && value != "produtoNaoSelecionado4") {
                $('.inputValor4').addClass('inputValorAmarelo');

            } else {
                $('.inputValor4').removeClass('inputValorAmarelo');
            }

            if (valueQuant != "quantidadeNaoSelecionada4") {
                if (value == 'salgado4') {
                    valorTotal = salgado * valueQuant;
                    document.getElementById("valor4").innerHTML = "R$" + valorTotal;
                } else {
                    if (value == 'refrigerante4') {
                        valorTotal = refrigerante * valueQuant;
                        document.getElementById("valor4").innerHTML = "R$" + valorTotal;
                    } else {
                        if (value == 'picole4') {
                            valorTotal = picole * valueQuant;
                            document.getElementById("valor4").innerHTML = "R$" + valorTotal;
                        } else {
                            if (value == 'chiclete4') {
                                valorTotal = chiclete * valueQuant;
                                document.getElementById("valor4").innerHTML = "R$" + valorTotal;
                            }
                        }
                    }
                }
            }
        }
        // ---------------------------------------------------------------------------------------Fim