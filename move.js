var Move_Values = [];
Move_Values[Move_Values.length] = {画像:"PC目線.png",テキスト:"動画編集ソフトクソ重いのだ…",キャラ:"ずんだもん"};
Move_Values[Move_Values.length] = {タイプ:"動作",画像:"閃き.png",サウンド:"閃く.wav",口消:true};
Move_Values[Move_Values.length] = {画像:"指さし.png",テキスト:"せや、ソフト使うのやめて、コードを書いてHTMLで動かせばいいのだ",キャラ:"ずんだもん"};
Move_Values[Move_Values.length] = {画像:"万歳.png",テキスト:"そうと決まれば早速やるのだ！ やっぱり僕は天才なのだ！",キャラ:"ずんだもん"};
Move_Values[Move_Values.length] = {タイプ:"めたん",画像:"PC目線.png",向き:"左"};
Move_Values[Move_Values.length] = {タイプ:"動作",画像:"PC目線.png",サウンド:"ふすまを開ける.wav",テキスト:"～大型モンスターが特殊召喚される時の音～",キャラ:"その他"};
Move_Values[Move_Values.length] = {テキスト:"ずんだもんちゃん、ちょっといいかしら？",キャラ:"めたん"};
Move_Values[Move_Values.length] = {画像:"右目線.png",テキスト:"そういうのは戸を開ける前に聞くもんなのだ",キャラ:"ずんだもん"};
Move_Values[Move_Values.length] = {テキスト:"…で、なんのようなのだ？",キャラ:"ずんだもん"};
Move_Values[Move_Values.length] = {テキスト:"これは動作テストだから無限ループするわよ",キャラ:"めたん"};
Move_Values[Move_Values.length] = {テキスト:"それと、時計の音と針は時計をクリックすれば消えるわよ",キャラ:"めたん"};
Move_Values[Move_Values.length] = {テキスト:"それじゃあ元の位置に戻るわね",キャラ:"めたん"};
Move_Values[Move_Values.length] = {タイプ:"動作",画像:"PC目線.png",サウンド:"ふすまを閉める.wav"};
Move_Values[Move_Values.length] = {タイプ:"めたん",画像:"考え.png",向き:"右"};
Move_Values[Move_Values.length] = {テキスト:"《閉ザサレシ世界ノ冥神》",キャラ:"ずんだもん"};
Move_Values[Move_Values.length] = {テキスト:"ちなみにこのコードは386行なのだ",キャラ:"ずんだもん"};

var Setting = 0;

function Wait_setting(a){
Move_Values[Setting].Wait = a;
Setting++;
};

Wait_setting(26);
Wait_setting(0);
Wait_setting(0);
Wait_setting(0);
Wait_setting(10);
Wait_setting(10);
Wait_setting(0);
Wait_setting(0);
Wait_setting(0);
Wait_setting(0);
Wait_setting(0);
Wait_setting(0);
Wait_setting(5);
Wait_setting(10);
Wait_setting(0);
