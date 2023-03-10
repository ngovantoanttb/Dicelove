var numOfPieces = 6 * 6;

        var frag = document.createDocumentFragment();

        function insertInnerPieces($el, innerPieces) {
            for (var i = 0; i < innerPieces; i++) {
                var $inner = document.createElement('div');
                $inner.classList.add('popup__piece-inner');
                $el.appendChild($inner);
            }
        };

        for (var i = 1; i <= numOfPieces; i++) {
            var $piece = document.createElement('div');
            $piece.classList.add('popup__piece');

            insertInnerPieces($piece, 3);
            frag.appendChild($piece);
        }

        document.querySelector('.popup__pieces').appendChild(frag);

        var $popupsCont = document.querySelector('.popups-cont');
        var $popup = document.querySelector('.popup');
        var popupAT = 900;

        function closeHandler() {
            $popupsCont.classList.remove('s--popup-active');
            $popup.classList.remove('s--active');
            $popup.classList.add('s--closed');

            setTimeout(function () {
                $popup.classList.remove('s--closed');
            }, popupAT);
        }

        document.querySelector('.popup__close').addEventListener('click', closeHandler);

        document.querySelector('.popups-cont__overlay').addEventListener('click', closeHandler);

        var winCount = 0;
        var lossCount = 0;
        var gameCount = 0;
        var thePoint = 0;
        var elDiceOne = document.getElementById('dice1');

        var elComeOut = document.getElementById('comeOutButton');
        var elPointRoll = document.getElementById('pointRollButton');
        var elWinOrLoss = document.getElementById('winOrLoss');
        var elCrapsWins = document.getElementById('crapWins');
        var elCrapsLosses = document.getElementById('crapLosses');

        elComeOut.onclick = function () { comeOutRoll(); };

        elPointRoll.onclick = function () { pointRoll(); };

        // Come Out Roll Function
        function comeOutRoll() {

            // Initial dice variables
            var diceOne = Math.floor((Math.random() * 6) + 1);
            var rollTotal = diceOne;

            console.log(rollTotal + ' ' + diceOne);
            elDiceOne.classList.toggle('animate');


            //Dice reset and display
            for (var i = 1; i <= 6; i++) {
                elDiceOne.classList.remove('show-' + i);
                if (diceOne === i) {
                    elDiceOne.classList.add('show-' + i);
                }
            }
            if (rollTotal  == 1) {
                setTimeout(() => {
                    $popupsCont.classList.add('s--popup-active');
                    $popup.classList.add('s--active');
                    document.querySelector("#txt-noiDung").innerHTML = "Ch??? mu???n ????nh em ng???t. <br/> V?? anh y??u em mu???n x??u .";
                }, 1000);

            }

            if (rollTotal  == 2) {
                setTimeout(() => {
                    $popupsCont.classList.add('s--popup-active');
                    $popup.classList.add('s--active');
                    document.querySelector("#txt-noiDung").innerHTML = "Mu???n b??nh y??n th?? l??n ch??a c???u ph??c. <br/> Mu???n Valentine h???nh ph??c th?? t??m ?????n anh.";
                }, 1000);

            }

            if (rollTotal  == 3) {
                setTimeout(() => {
                    $popupsCont.classList.add('s--popup-active');
                    $popup.classList.add('s--active');
                    document.querySelector("#txt-noiDung").innerHTML = "Ch???ng c???n Tinder ch??? c???n tin em.";
                }, 1000);

            }
            if (rollTotal  == 4) {
                setTimeout(() => {
                    $popupsCont.classList.add('s--popup-active');
                    $popup.classList.add('s--active');
                    document.querySelector("#txt-noiDung").innerHTML = "D??? b??o th???i ti???t n??i Valentine n??y em c?? anh.";
                }, 1000);

            }

            if (rollTotal  == 5) {
                setTimeout(() => {
                    $popupsCont.classList.add('s--popup-active');
                    $popup.classList.add('s--active');
                    document.querySelector("#txt-noiDung").innerHTML = "Anh c?? nhi???u b???n nam r???i <br/> Em l??m b???n g??i anh nha.";
                }, 1000);

            }

            if (rollTotal  == 6) {
                setTimeout(() => {
                    $popupsCont.classList.add('s--popup-active');
                    $popup.classList.add('s--active');
                    document.querySelector("#txt-noiDung").innerHTML = "G???i t??nh y??u c???a anh l?? bi???n c??? <br/> V?? n?? lu??n bao la.";
                }, 1000);

            }

            setTimeout(winLossCount(), 1500);
        }


