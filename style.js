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
                    document.querySelector("#txt-noiDung").innerHTML = "Chỉ muốn đánh em ngất. <br/> Vì anh yêu em muốn xĩu .";
                }, 1000);

            }

            if (rollTotal  == 2) {
                setTimeout(() => {
                    $popupsCont.classList.add('s--popup-active');
                    $popup.classList.add('s--active');
                    document.querySelector("#txt-noiDung").innerHTML = "Muốn bình yên thì lên chùa cầu phúc. <br/> Muốn Valentine hạnh phúc thì tìm đến anh.";
                }, 1000);

            }

            if (rollTotal  == 3) {
                setTimeout(() => {
                    $popupsCont.classList.add('s--popup-active');
                    $popup.classList.add('s--active');
                    document.querySelector("#txt-noiDung").innerHTML = "Chẳng cần Tinder chỉ cần tin em.";
                }, 1000);

            }
            if (rollTotal  == 4) {
                setTimeout(() => {
                    $popupsCont.classList.add('s--popup-active');
                    $popup.classList.add('s--active');
                    document.querySelector("#txt-noiDung").innerHTML = "Dự báo thời tiết nói Valentine này em có anh.";
                }, 1000);

            }

            if (rollTotal  == 5) {
                setTimeout(() => {
                    $popupsCont.classList.add('s--popup-active');
                    $popup.classList.add('s--active');
                    document.querySelector("#txt-noiDung").innerHTML = "Anh có nhiều bạn nam rồi <br/> Em làm bạn gái anh nha.";
                }, 1000);

            }

            if (rollTotal  == 6) {
                setTimeout(() => {
                    $popupsCont.classList.add('s--popup-active');
                    $popup.classList.add('s--active');
                    document.querySelector("#txt-noiDung").innerHTML = "Gọi tình yêu của anh là biển cả <br/> Vì nó luôn bao la.";
                }, 1000);

            }

            setTimeout(winLossCount(), 1500);
        }


