enchant();

var Big_Json = {};

function Game_load(width,height){
  var game = new Game(width,height);
  game.fps = 10;
  game.onload = function(){

    var Loading_Scene = function(){
      var scene = new Scene();

      var Clock_Images = [];
      var I = null;
      var Metan = [];
      var URLs = [];
      var Images = [];
      var Clock_URLs = [];
      var Metan_URLs = [];

      Metan_URLs[0] = "めたん.png";
      Metan_URLs[1] = "わあー.png";

      URLs[0] = "ドア.png";
      URLs[1] = "PC目線.png";
      URLs[2] = "～.png";

      Clock_URLs[0] = "https://i.gyazo.com/837f2c18396c03218b05c31ec394107c.png";
      Clock_URLs[1] = "https://i.gyazo.com/751203c0bcc9bc6e00f08260a3ff9899.png";
      Clock_URLs[2] = "https://i.gyazo.com/c97f8fdde0cfe14092b9e021531faa90.png";
      Clock_URLs[3] = "https://i.gyazo.com/7593e53f1051370ee08ff2b9cd4efbc7.png";
      Clock_URLs[4] = "https://i.gyazo.com/efe18df3e1d3d13cbca451cdaf88a040.png";
      Clock_URLs[5] = "https://i.gyazo.com/013d1ab0bd11f0250e0b936dca6768ca.png";
      Clock_URLs[6] = "https://i.gyazo.com/d5bea7ab5d57ed5dda2176336f8a39c9.png";

      function Metan_make(){
        I = Metan.length;
        Metan[I] = new Entity();
        Metan[I]._element = document.createElement("img");
        Metan[I].width = 1082;
        Metan[I].height = 1820;
        Metan[I].x = 1450;
        Metan[I].y = -380;
        Metan[I].scaleX = 0.45;
        Metan[I].scaleY = 0.45;
        Metan[I]._element.src = Metan_URLs[I];
        scene.addChild(Metan[I]);
      };

      function Image_make(){
        I = Images.length;
        Images[I] = new Entity();
        Images[I]._element = document.createElement("img");
        Images[I].width = width;
        Images[I].height = height;
        Images[I]._element.src = URLs[I];
        scene.addChild(Images[I]);
      };

      function Clock_Image_make(){
        I = Clock_Images.length;
        Clock_Images[I] = new Entity();
        Clock_Images[I]._element = document.createElement("img");
        Clock_Images[I].width = 300;
        Clock_Images[I].height = 300;
        Clock_Images[I]._element.src = Clock_URLs[I];
        scene.addChild(Clock_Images[I]);
      };

      var Label = [];
      var Collars = {ずんだもん:"c0fc8a",めたん:"f78bd2",その他:"yellow"};
      var Texts =  "クリックしな";
      var Px = 60;

      var T_width = document.createElement('canvas').getContext('2d');
      T_width.font = Px + "px メイリオ";

      function Text_make(a){
        J = Label.length;
        Label[J] = new Sprite();
        Label[J]._element = document.createElement("measureText");
        Label[J]._style.font = Px + "px メイリオ";
        Label[J]._element.textContent = a;
        Label[J].width = T_width.measureText(a).width;
        if(Label[J].width < width) Label[J].x = (width - Label[J].width) / 2;
        else{
          Label[J].x = 0;
          Label[J].width = width;
        };
        Label[J].y = height - 220;
        //Label[J]._style.color = "white";
        scene.addChild(Label[J]);
      };

      for(var I = 0; I < Metan_URLs.length; I++) Metan_make();
      for(var I = 0; I < URLs.length; I++) Image_make();
      for(var I = 0; I < Clock_URLs.length; I++) Clock_Image_make();

      for(var K = 1; K < 10; K++){
        for(var I = 1; I < 10; I++){
          Text_make(Texts);
          Label[J].x += I;
          Label[J].y += K;
          Label[J].X = I;
        };
      };
      for(var K = 1; K < 10; K++){
        for(var I = 1; I < 10; I++){
          Text_make(Texts);
          Label[J].x += I;
          Label[J].y -= K;
          Label[J].X = I;
        };
      };
      for(var K = 1; K < 10; K++){
        for(var I = 1; I < 10; I++){
          Text_make(Texts);
          Label[J].x -= I;
          Label[J].y += K;
          Label[J].X = -I;
        };
      };
      for(var K = 1; K < 10; K++){
        for(var I = 1; I < 10; I++){
          Text_make(Texts);
          Label[J].x -= I;
          Label[J].y -= K;
          Label[J].X = -I;
        };
      };

      Text_make(Texts);
      Label[J]._style.color = Collars.その他;

      var Time = null;
      var Times = null;
      var Kasoku = 0;
      var Mouth = 10;
      var M_Mouth = 10;

      function Text_Change(a,b){
        for(var I = 0; I < Label.length; I++){
          Label[I]._element.textContent = a;
          Label[I].width = T_width.measureText(a).width;
          if(Label[I].width < width) Label[I].x = (width - Label[I].width) / 2;
          else{
            Label[I].x = 0;
            Label[I].width = width;
          };
          if(Label[I].X) Label[I].x += Label[I].X;
        };
        if(b) Label[I-1]._style.color = Collars[b];
        for(var I = 0; I < Label.length; I++) Label[I].opacity = 1;
        return;
      };

      var Counter = document.createElement("audio");
      Counter.src = "https://raw.githubusercontent.com/compromise-satisfaction/saved/master/音/効果音/カウンター.wav";

      var Sound = document.createElement("audio");
      Sound.addEventListener("ended",function(e){
        Mouth = 10;
        M_Mouth = 10;
        if(!Wait) Move();
      });

      var Moves = 0;
      var Temp = null;
      var Wait = 0;

      function Move(){
        for(var I = 0; I < Label.length; I++) Label[I].opacity = 0;
        console.log(Moves);
        Temp = Move_Values[Moves];

        if(Temp.口消) Images[2].opacity = 0;
        else Images[2].opacity = 1;
        if(Temp.Wait) Wait = Temp.Wait;
        if(Temp.画像) Images[1]._element.src = Temp.画像;
        if(Temp.テキスト){
          Text_Change(Temp.テキスト,Temp.キャラ);
          switch(Temp.キャラ){
              case "ずんだもん":
      	        Mouth = 0;
      	        break;
      	      case "めたん":
       	       M_Mouth = 0;
       	       break;
         	 };
        };

        switch(Temp.タイプ){
          case "めたん":
            switch(Temp.向き){
              case "上":
                for(var I = 0; I < Metan.length; I++) Metan[I].tl.moveTo(Metan[I].x,Metan[I].y-500,Wait);
                break;
              case "下":
                for(var I = 0; I < Metan.length; I++) Metan[I].tl.moveTo(Metan[I].x,Metan[I].y+500,Wait);
                break;
              case "左":
                for(var I = 0; I < Metan.length; I++){
                  if(Metan[I].scaleX < 0) Metan[I].scaleX *= -1;
                  Metan[I].tl.moveTo(Metan[I].x-500,Metan[I].y,Wait);
                };
                break;
              case "右":
                for(var I = 0; I < Metan.length; I++){
                  if(Metan[I].scaleX > 0) Metan[I].scaleX *= -1;
                  Metan[I].tl.moveTo(Metan[I].x+500,Metan[I].y,Wait);
                };
                break;
            };
            break;
          case "動作":
            Sound.src = Temp.サウンド;
            Sound.play();
            switch(Temp.サウンド){
              case "ふすまを開ける.wav":
                Images[0].tl.moveTo(530,0,Wait);
                break;
              case "ふすまを閉める.wav":
                Images[0].tl.moveTo(0,0,Wait);
                break;
            };
            break;
          default:
            Sound.src = Temp.テキスト + ".wav";
            Sound.play();
            break;
        };
        Moves++;
        if(Move_Values.length==Moves) Moves = 0;
      };

      var AAA = true;
      var BBB = true;

      Clock_Images[6].addEventListener("touchstart",function(e){
        BBB = false;
        Move_Values[10] = {テキスト:"時計はもうクリックしたみたいね",キャラ:"めたん"};
        for(var I = 4; I < 7; I++) scene.removeChild(Clock_Images[I]);
      });

      Clock_Images[3].addEventListener("touchstart",function(e){
        BBB = true;
        Move_Values[10] = {テキスト:"それと、時計の音と針は時計をクリックすれば消えるわよ",キャラ:"めたん"};
        for(var I = 4; I < 7; I++) scene.addChild(Clock_Images[I]);
      });

      scene.addEventListener("touchstart",function(e){
        if(AAA){
          Move();
          AAA = false;
          return;
        };
      });

      window.addEventListener("keyup",function(e){
        switch(e.key){
          case "d":
            if(Images[0].x) Images[0].tl.moveTo(0,0,5);
            else Images[0].tl.moveTo(530,0,5);
            break;
          default:
            console.log(e.key);
            break;
        };
      });

      scene.addEventListener("enterframe",function(){

        if(Wait){
          Wait--;
          if(!Wait) Move();
        };

        switch(Mouth){
          case 0:
            Mouth++;
            break;
          case 1:
            Images[2]._element.src = "～.png";
            Mouth++;
            break;
          case 2:
            Images[2]._element.src = "んへー.png";
            Mouth++;
            break;
          case 3:
            Images[2]._element.src = "んあー.png";
            Mouth = 0;
            Mouth++;
            break;
          default:
            Images[2]._element.src = "むふ.png";
            break;
        };
        switch(M_Mouth){
          case 0:
            M_Mouth++;
            break;
          case 1:
            Metan[1]._element.src = "ほほえみ.png";
            M_Mouth++;
            break;
          case 2:
            Metan[1]._element.src = "お.png";
            M_Mouth++;
            break;
          case 3:
            Metan[1]._element.src = "わあー.png";
            M_Mouth = 0;
            M_Mouth++;
            break;
          default:
            Metan[1]._element.src = "ほほえみ.png";
            break;
        };
      });

      var TTT = 0;

      scene.addEventListener("enterframe",function(){

        Times = new Date();
        /*
        Times = new Date("2000/01/01");
        Times.setSeconds(Kasoku);
        Kasoku += 2;
        */
        Time = [];
        Time[0] = Times.getHours();
        Time[1] = Times.getMinutes();
        Time[2] = Times.getSeconds();
        if(TTT!=Time[2]){
          TTT = Time[2];
          if(BBB) Counter.play();
        };
        Clock_Images[1].rotation = Time[0]*30 + Time[1]*0.5;
        Clock_Images[2].rotation = Time[1]*6;
        Clock_Images[3].rotation = Time[2]*6;
        Clock_Images[4].rotation = Time[0]*30 + Time[1]*0.5;
        Clock_Images[5].rotation = Time[1]*6;
        Clock_Images[6].rotation = Time[2]*6;
      });
      return scene;
    };

    game.replaceScene(Loading_Scene());
    return;
};
game.start();
};
