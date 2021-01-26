let rules = document.getElementById("rules")
let playbtn = document.getElementById("play_btn")
let playboard = document.getElementById("content")
let buttons = document.getElementById("cuz_what_not")
let player_score = document.getElementById("score_player")
let dealer_score = document.getElementById("score_dealer")
let addplayerscr = 0
let adddealerscr = 0
let startscoreplayer = 0
let startscoredealer = 0
let playercardsNo = 2
let dealercardsNo = 1

let ace = document.createElement("img")
let two = document.createElement("img")
let three = document.createElement("img")
let four = document.createElement("img")
let five = document.createElement("img")
let six = document.createElement("img")
let seven = document.createElement("img")
let eight = document.createElement("img")
let nine = document.createElement("img")
let ten = document.createElement("img")
let j = document.createElement("img")
let q = document.createElement("img")
let k = document.createElement("img")
let back = document.createElement("img")

let ace2 = document.createElement("img")
let two2 = document.createElement("img")
let three2 = document.createElement("img")
let four2 = document.createElement("img")
let five2 = document.createElement("img")
let six2 = document.createElement("img")
let seven2 = document.createElement("img")
let eight2 = document.createElement("img")
let nine2 = document.createElement("img")
let ten2 = document.createElement("img")
let j2 = document.createElement("img")
let q2 = document.createElement("img")
let k2 = document.createElement("img")

let ace3 = document.createElement("img")
let two3 = document.createElement("img")
let three3 = document.createElement("img")
let four3 = document.createElement("img")
let five3 = document.createElement("img")
let six3 = document.createElement("img")
let seven3 = document.createElement("img")
let eight3 = document.createElement("img")
let nine3 = document.createElement("img")
let ten3 = document.createElement("img")
let j3 = document.createElement("img")
let q3 = document.createElement("img")
let k3 = document.createElement("img")

let ace4 = document.createElement("img")
let two4 = document.createElement("img")
let three4 = document.createElement("img")
let four4 = document.createElement("img")
let five4 = document.createElement("img")
let six4 = document.createElement("img")
let seven4 = document.createElement("img")
let eight4 = document.createElement("img")
let nine4 = document.createElement("img")
let ten4 = document.createElement("img")
let j4 = document.createElement("img")
let q4 = document.createElement("img")
let k4 = document.createElement("img")

let ace5 = document.createElement("img")
let two5 = document.createElement("img")
let three5 = document.createElement("img")
let four5 = document.createElement("img")
let five5 = document.createElement("img")
let six5 = document.createElement("img")
let seven5 = document.createElement("img")
let eight5 = document.createElement("img")
let nine5 = document.createElement("img")
let ten5 = document.createElement("img")
let j5 = document.createElement("img")
let q5 = document.createElement("img")
let k5 = document.createElement("img")

let ace6 = document.createElement("img")
let two6 = document.createElement("img")
let three6 = document.createElement("img")
let four6 = document.createElement("img")
let five6 = document.createElement("img")
let six6 = document.createElement("img")
let seven6 = document.createElement("img")
let eight6 = document.createElement("img")
let nine6 = document.createElement("img")
let ten6 = document.createElement("img")
let j6 = document.createElement("img")
let q6 = document.createElement("img")
let k6 = document.createElement("img")

let ace7 = document.createElement("img")
let two7 = document.createElement("img")
let three7 = document.createElement("img")
let four7 = document.createElement("img")
let five7 = document.createElement("img")
let six7 = document.createElement("img")
let seven7 = document.createElement("img")
let eight7 = document.createElement("img")
let nine7 = document.createElement("img")
let ten7 = document.createElement("img")
let j7 = document.createElement("img")
let q7 = document.createElement("img")
let k7 = document.createElement("img")

let ace8 = document.createElement("img")
let two8 = document.createElement("img")
let three8 = document.createElement("img")
let four8 = document.createElement("img")
let five8 = document.createElement("img")
let six8 = document.createElement("img")
let seven8 = document.createElement("img")
let eight8 = document.createElement("img")
let nine8 = document.createElement("img")
let ten8 = document.createElement("img")
let j8 = document.createElement("img")
let q8 = document.createElement("img")
let k8 = document.createElement("img")

let ace9 = document.createElement("img")
let two9 = document.createElement("img")
let three9 = document.createElement("img")
let four9 = document.createElement("img")
let five9 = document.createElement("img")
let six9 = document.createElement("img")
let seven9 = document.createElement("img")
let eight9 = document.createElement("img")
let nine9 = document.createElement("img")
let ten9 = document.createElement("img")
let j9 = document.createElement("img")
let q9 = document.createElement("img")
let k9 = document.createElement("img")

let ace10 = document.createElement("img")
let two10 = document.createElement("img")
let three10 = document.createElement("img")
let four10 = document.createElement("img")
let five10 = document.createElement("img")
let six10 = document.createElement("img")
let seven10 = document.createElement("img")
let eight10 = document.createElement("img")
let nine10 = document.createElement("img")
let ten10 = document.createElement("img")
let j10 = document.createElement("img")
let q10 = document.createElement("img")
let k10 = document.createElement("img")

let ace11 = document.createElement("img")
let two11 = document.createElement("img")
let three11 = document.createElement("img")
let four11 = document.createElement("img")
let five11 = document.createElement("img")
let six11 = document.createElement("img")
let seven11 = document.createElement("img")
let eight11 = document.createElement("img")
let nine11 = document.createElement("img")
let ten11 = document.createElement("img")
let j11 = document.createElement("img")
let q11 = document.createElement("img")
let k11 = document.createElement("img")

let aced = document.createElement("img")
let twod = document.createElement("img")
let threed = document.createElement("img")
let fourd = document.createElement("img")
let fived = document.createElement("img")
let sixd = document.createElement("img")
let sevend = document.createElement("img")
let eightd = document.createElement("img")
let nined = document.createElement("img")
let tend = document.createElement("img")
let jd = document.createElement("img")
let qd = document.createElement("img")
let kd = document.createElement("img")
 
let aced2 = document.createElement("img")
let twod2 = document.createElement("img")
let threed2 = document.createElement("img")
let fourd2 = document.createElement("img")
let fived2 = document.createElement("img")
let sixd2 = document.createElement("img")
let sevend2 = document.createElement("img")
let eightd2 = document.createElement("img")
let nined2 = document.createElement("img")
let tend2 = document.createElement("img")
let jd2 = document.createElement("img")
let qd2 = document.createElement("img")
let kd2 = document.createElement("img")
 
let aced3 = document.createElement("img")
let twod3 = document.createElement("img")
let threed3 = document.createElement("img")
let fourd3 = document.createElement("img")
let fived3 = document.createElement("img")
let sixd3 = document.createElement("img")
let sevend3 = document.createElement("img")
let eightd3 = document.createElement("img")
let nined3 = document.createElement("img")
let tend3 = document.createElement("img")
let jd3 = document.createElement("img")
let qd3 = document.createElement("img")
let kd3 = document.createElement("img")
 
let aced4 = document.createElement("img")
let twod4 = document.createElement("img")
let threed4 = document.createElement("img")
let fourd4 = document.createElement("img")
let fived4 = document.createElement("img")
let sixd4 = document.createElement("img")
let sevend4 = document.createElement("img")
let eightd4 = document.createElement("img")
let nined4 = document.createElement("img")
let tend4 = document.createElement("img")
let jd4 = document.createElement("img")
let qd4 = document.createElement("img")
let kd4 = document.createElement("img")
 
let aced5 = document.createElement("img")
let twod5 = document.createElement("img")
let threed5 = document.createElement("img")
let fourd5 = document.createElement("img")
let fived5 = document.createElement("img")
let sixd5 = document.createElement("img")
let sevend5 = document.createElement("img")
let eightd5 = document.createElement("img")
let nined5 = document.createElement("img")
let tend5 = document.createElement("img")
let jd5 = document.createElement("img")
let qd5 = document.createElement("img")
let kd5 = document.createElement("img")
 
let aced6 = document.createElement("img")
let twod6 = document.createElement("img")
let threed6 = document.createElement("img")
let fourd6 = document.createElement("img")
let fived6 = document.createElement("img")
let sixd6 = document.createElement("img")
let sevend6 = document.createElement("img")
let eightd6 = document.createElement("img")
let nined6 = document.createElement("img")
let tend6 = document.createElement("img")
let jd6 = document.createElement("img")
let qd6 = document.createElement("img")
let kd6 = document.createElement("img")
 
let aced7 = document.createElement("img")
let twod7 = document.createElement("img")
let threed7 = document.createElement("img")
let fourd7 = document.createElement("img")
let fived7 = document.createElement("img")
let sixd7 = document.createElement("img")
let sevend7 = document.createElement("img")
let eightd7 = document.createElement("img")
let nined7 = document.createElement("img")
let tend7 = document.createElement("img")
let jd7 = document.createElement("img")
let qd7 = document.createElement("img")
let kd7 = document.createElement("img")
 
let aced8 = document.createElement("img")
let twod8 = document.createElement("img")
let threed8 = document.createElement("img")
let fourd8 = document.createElement("img")
let fived8 = document.createElement("img")
let sixd8 = document.createElement("img")
let sevend8 = document.createElement("img")
let eightd8 = document.createElement("img")
let nined8 = document.createElement("img")
let tend8 = document.createElement("img")
let jd8 = document.createElement("img")
let qd8 = document.createElement("img")
let kd8 = document.createElement("img")
 
let aced9 = document.createElement("img")
let twod9 = document.createElement("img")
let threed9 = document.createElement("img")
let fourd9 = document.createElement("img")
let fived9 = document.createElement("img")
let sixd9 = document.createElement("img")
let sevend9 = document.createElement("img")
let eightd9 = document.createElement("img")
let nined9 = document.createElement("img")
let tend9 = document.createElement("img")
let jd9 = document.createElement("img")
let qd9 = document.createElement("img")
let kd9 = document.createElement("img")
 
let aced10 = document.createElement("img")
let twod10 = document.createElement("img")
let threed10 = document.createElement("img")
let fourd10 = document.createElement("img")
let fived10 = document.createElement("img")
let sixd10 = document.createElement("img")
let sevend10 = document.createElement("img")
let eightd10 = document.createElement("img")
let nined10 = document.createElement("img")
let tend10 = document.createElement("img")
let jd10 = document.createElement("img")
let qd10 = document.createElement("img")
let kd10 = document.createElement("img")

let aced11 = document.createElement("img")
let twod11 = document.createElement("img")
let threed11 = document.createElement("img")
let fourd11 = document.createElement("img")
let fived11 = document.createElement("img")
let sixd11 = document.createElement("img")
let sevend11 = document.createElement("img")
let eightd11 = document.createElement("img")
let nined11 = document.createElement("img")
let tend11 = document.createElement("img")
let jd11 = document.createElement("img")
let qd11 = document.createElement("img")
let kd11 = document.createElement("img")

ace.src = "Cards/Ace.png"
two.src = "Cards/Two.png"
three.src = "Cards/Three.png"
four.src = "Cards/Four.png"
five.src = "Cards/Five.png"
six.src = "Cards/Six.png"
seven.src = "Cards/Seven.png"
eight.src = "Cards/Eight.png"
nine.src = "Cards/Nine.png"
ten.src = "Cards/Ten.png"
j.src = "Cards/Jack.png"
q.src = "Cards/Queen.png"
k.src = "Cards/King.png"
back.src = "Cards/Back.png"

ace2.src = "Cards/Ace.png"
two2.src = "Cards/Two.png"
three2.src = "Cards/Three.png"
four2.src = "Cards/Four.png"
five2.src = "Cards/Five.png"
six2.src = "Cards/Six.png"
seven2.src = "Cards/Seven.png"
eight2.src = "Cards/Eight.png"
nine2.src = "Cards/Nine.png"
ten2.src = "Cards/Ten.png"
j2.src = "Cards/Jack.png"
q2.src = "Cards/Queen.png"
k2.src = "Cards/King.png"

ace3.src = "Cards/Ace.png"
two3.src = "Cards/Two.png"
three3.src = "Cards/Three.png"
four3.src = "Cards/Four.png"
five3.src = "Cards/Five.png"
six3.src = "Cards/Six.png"
seven3.src = "Cards/Seven.png"
eight3.src = "Cards/Eight.png"
nine3.src = "Cards/Nine.png"
ten3.src = "Cards/Ten.png"
j3.src = "Cards/Jack.png"
q3.src = "Cards/Queen.png"
k3.src = "Cards/King.png"

ace4.src = "Cards/Ace.png"
two4.src = "Cards/Two.png"
three4.src = "Cards/Three.png"
four4.src = "Cards/Four.png"
five4.src = "Cards/Five.png"
six4.src = "Cards/Six.png"
seven4.src = "Cards/Seven.png"
eight4.src = "Cards/Eight.png"
nine4.src = "Cards/Nine.png"
ten4.src = "Cards/Ten.png"
j4.src = "Cards/Jack.png"
q4.src = "Cards/Queen.png"
k4.src = "Cards/King.png"

ace5.src = "Cards/Ace.png"
two5.src = "Cards/Two.png"
three5.src = "Cards/Three.png"
four5.src = "Cards/Four.png"
five5.src = "Cards/Five.png"
six5.src = "Cards/Six.png"
seven5.src = "Cards/Seven.png"
eight5.src = "Cards/Eight.png"
nine5.src = "Cards/Nine.png"
ten5.src = "Cards/Ten.png"
j5.src = "Cards/Jack.png"
q5.src = "Cards/Queen.png"
k5.src = "Cards/King.png"

ace6.src = "Cards/Ace.png"
two6.src = "Cards/Two.png"
three6.src = "Cards/Three.png"
four6.src = "Cards/Four.png"
five6.src = "Cards/Five.png"
six6.src = "Cards/Six.png"
seven6.src = "Cards/Seven.png"
eight6.src = "Cards/Eight.png"
nine6.src = "Cards/Nine.png"
ten6.src = "Cards/Ten.png"
j6.src = "Cards/Jack.png"
q6.src = "Cards/Queen.png"
k6.src = "Cards/King.png"

ace7.src = "Cards/Ace.png"
two7.src = "Cards/Two.png"
three7.src = "Cards/Three.png"
four7.src = "Cards/Four.png"
five7.src = "Cards/Five.png"
six7.src = "Cards/Six.png"
seven7.src = "Cards/Seven.png"
eight7.src = "Cards/Eight.png"
nine7.src = "Cards/Nine.png"
ten7.src = "Cards/Ten.png"
j7.src = "Cards/Jack.png"
q7.src = "Cards/Queen.png"
k7.src = "Cards/King.png"

ace8.src = "Cards/Ace.png"
two8.src = "Cards/Two.png"
three8.src = "Cards/Three.png"
four8.src = "Cards/Four.png"
five8.src = "Cards/Five.png"
six8.src = "Cards/Six.png"
seven8.src = "Cards/Seven.png"
eight8.src = "Cards/Eight.png"
nine8.src = "Cards/Nine.png"
ten8.src = "Cards/Ten.png"
j8.src = "Cards/Jack.png"
q8.src = "Cards/Queen.png"
k8.src = "Cards/King.png"

ace9.src = "Cards/Ace.png"
two9.src = "Cards/Two.png"
three9.src = "Cards/Three.png"
four9.src = "Cards/Four.png"
five9.src = "Cards/Five.png"
six9.src = "Cards/Six.png"
seven9.src = "Cards/Seven.png"
eight9.src = "Cards/Eight.png"
nine9.src = "Cards/Nine.png"
ten9.src = "Cards/Ten.png"
j9.src = "Cards/Jack.png"
q9.src = "Cards/Queen.png"
k9.src = "Cards/King.png"

ace10.src = "Cards/Ace.png"
two10.src = "Cards/Two.png"
three10.src = "Cards/Three.png"
four10.src = "Cards/Four.png"
five10.src = "Cards/Five.png"
six10.src = "Cards/Six.png"
seven10.src = "Cards/Seven.png"
eight10.src = "Cards/Eight.png"
nine10.src = "Cards/Nine.png"
ten10.src = "Cards/Ten.png"
j10.src = "Cards/Jack.png"
q10.src = "Cards/Queen.png"
k10.src = "Cards/King.png"

ace11.src = "Cards/Ace.png"
two11.src = "Cards/Two.png"
three11.src = "Cards/Three.png"
four11.src = "Cards/Four.png"
five11.src = "Cards/Five.png"
six11.src = "Cards/Six.png"
seven11.src = "Cards/Seven.png"
eight11.src = "Cards/Eight.png"
nine11.src = "Cards/Nine.png"
ten11.src = "Cards/Ten.png"
j11.src = "Cards/Jack.png"
q11.src = "Cards/Queen.png"
k11.src = "Cards/King.png"

aced.src = "Cards/Ace.png"
twod.src = "Cards/Two.png"
threed.src = "Cards/Three.png"
fourd.src = "Cards/Four.png"
fived.src = "Cards/Five.png"
sixd.src = "Cards/Six.png"
sevend.src = "Cards/Seven.png"
eightd.src = "Cards/Eight.png"
nined.src = "Cards/Nine.png"
tend.src = "Cards/Ten.png"
jd.src = "Cards/Jack.png"
qd.src = "Cards/Queen.png"
kd.src = "Cards/King.png"
 
aced2.src = "Cards/Ace.png"
twod2.src = "Cards/Two.png"
threed2.src = "Cards/Three.png"
fourd2.src = "Cards/Four.png"
fived2.src = "Cards/Five.png"
sixd2.src = "Cards/Six.png"
sevend2.src = "Cards/Seven.png"
eightd2.src = "Cards/Eight.png"
nined2.src = "Cards/Nine.png"
tend2.src = "Cards/Ten.png"
jd2.src = "Cards/Jack.png"
qd2.src = "Cards/Queen.png"
kd2.src = "Cards/King.png"
 
aced3.src = "Cards/Ace.png"
twod3.src = "Cards/Two.png"
threed3.src = "Cards/Three.png"
fourd3.src = "Cards/Four.png"
fived3.src = "Cards/Five.png"
sixd3.src = "Cards/Six.png"
sevend3.src = "Cards/Seven.png"
eightd3.src = "Cards/Eight.png"
nined3.src = "Cards/Nine.png"
tend3.src = "Cards/Ten.png"
jd3.src = "Cards/Jack.png"
qd3.src = "Cards/Queen.png"
kd3.src = "Cards/King.png"
 
aced4.src = "Cards/Ace.png"
twod4.src = "Cards/Two.png"
threed4.src = "Cards/Three.png"
fourd4.src = "Cards/Four.png"
fived4.src = "Cards/Five.png"
sixd4.src = "Cards/Six.png"
sevend4.src = "Cards/Seven.png"
eightd4.src = "Cards/Eight.png"
nined4.src = "Cards/Nine.png"
tend4.src = "Cards/Ten.png"
jd4.src = "Cards/Jack.png"
qd4.src = "Cards/Queen.png"
kd4.src = "Cards/King.png"
 
aced5.src = "Cards/Ace.png"
twod5.src = "Cards/Two.png"
threed5.src = "Cards/Three.png"
fourd5.src = "Cards/Four.png"
fived5.src = "Cards/Five.png"
sixd5.src = "Cards/Six.png"
sevend5.src = "Cards/Seven.png"
eightd5.src = "Cards/Eight.png"
nined5.src = "Cards/Nine.png"
tend5.src = "Cards/Ten.png"
jd5.src = "Cards/Jack.png"
qd5.src = "Cards/Queen.png"
kd5.src = "Cards/King.png"
 
aced6.src = "Cards/Ace.png"
twod6.src = "Cards/Two.png"
threed6.src = "Cards/Three.png"
fourd6.src = "Cards/Four.png"
fived6.src = "Cards/Five.png"
sixd6.src = "Cards/Six.png"
sevend6.src = "Cards/Seven.png"
eightd6.src = "Cards/Eight.png"
nined6.src = "Cards/Nine.png"
tend6.src = "Cards/Ten.png"
jd6.src = "Cards/Jack.png"
qd6.src = "Cards/Queen.png"
kd6.src = "Cards/King.png"
 
aced7.src = "Cards/Ace.png"
twod7.src = "Cards/Two.png"
threed7.src = "Cards/Three.png"
fourd7.src = "Cards/Four.png"
fived7.src = "Cards/Five.png"
sixd7.src = "Cards/Six.png"
sevend7.src = "Cards/Seven.png"
eightd7.src = "Cards/Eight.png"
nined7.src = "Cards/Nine.png"
tend7.src = "Cards/Ten.png"
jd7.src = "Cards/Jack.png"
qd7.src = "Cards/Queen.png"
kd7.src = "Cards/King.png"
 
aced8.src = "Cards/Ace.png"
twod8.src = "Cards/Two.png"
threed8.src = "Cards/Three.png"
fourd8.src = "Cards/Four.png"
fived8.src = "Cards/Five.png"
sixd8.src = "Cards/Six.png"
sevend8.src = "Cards/Seven.png"
eightd8.src = "Cards/Eight.png"
nined8.src = "Cards/Nine.png"
tend8.src = "Cards/Ten.png"
jd8.src = "Cards/Jack.png"
qd8.src = "Cards/Queen.png"
kd8.src = "Cards/King.png"
 
aced9.src = "Cards/Ace.png"
twod9.src = "Cards/Two.png"
threed9.src = "Cards/Three.png"
fourd9.src = "Cards/Four.png"
fived9.src = "Cards/Five.png"
sixd9.src = "Cards/Six.png"
sevend9.src = "Cards/Seven.png"
eightd9.src = "Cards/Eight.png"
nined9.src = "Cards/Nine.png"
tend9.src = "Cards/Ten.png"
jd9.src = "Cards/Jack.png"
qd9.src = "Cards/Queen.png"
kd9.src = "Cards/King.png"

aced10.src = "Cards/Ace.png"
twod10.src = "Cards/Two.png"
threed10.src = "Cards/Three.png"
fourd10.src = "Cards/Four.png"
fived10.src = "Cards/Five.png"
sixd10.src = "Cards/Six.png"
sevend10.src = "Cards/Seven.png"
eightd10.src = "Cards/Eight.png"
nined10.src = "Cards/Nine.png"
tend10.src = "Cards/Ten.png"
jd10.src = "Cards/Jack.png"
qd10.src = "Cards/Queen.png"
kd10.src = "Cards/King.png"

aced11.src = "Cards/Ace.png"
twod11.src = "Cards/Two.png"
threed11.src = "Cards/Three.png"
fourd11.src = "Cards/Four.png"
fived11.src = "Cards/Five.png"
sixd11.src = "Cards/Six.png"
sevend11.src = "Cards/Seven.png"
eightd11.src = "Cards/Eight.png"
nined11.src = "Cards/Nine.png"
tend11.src = "Cards/Ten.png"
jd11.src = "Cards/Jack.png"
qd11.src = "Cards/Queen.png"
kd11.src = "Cards/King.png"

ace.style.width = "110px"
ace.style.height = "150px"

two.style.width = "110px"
two.style.height = "150px"

three.style.width = "110px"
three.style.height = "150px"

four.style.width = "110px"
four.style.height = "150px"

five.style.width = "110px"
five.style.height = "150px"

six.style.width = "110px"
six.style.height = "150px"

seven.style.width = "110px"
seven.style.height = "150px"

eight.style.width = "110px"
eight.style.height = "150px"

nine.style.width = "110px"
nine.style.height = "150px"

ten.style.width = "110px"
ten.style.height = "150px"

j.style.width = "110px"
j.style.height = "150px"

q.style.width = "110px"
q.style.height = "150px"

k.style.width = "110px"
k.style.height = "150px"

back.style.width = "180px"
back.style.height = "180px"

ace2.style.width = "110px"
ace2.style.height = "150px"

two2.style.width = "110px"
two2.style.height = "150px"

three2.style.width = "110px"
three2.style.height = "150px"

four2.style.width = "110px"
four2.style.height = "150px"

five2.style.width = "110px"
five2.style.height = "150px"

six2.style.width = "110px"
six2.style.height = "150px"

seven2.style.width = "110px"
seven2.style.height = "150px"

eight2.style.width = "110px"
eight2.style.height = "150px"

nine2.style.width = "110px"
nine2.style.height = "150px"

ten2.style.width = "110px"
ten2.style.height = "150px"

j2.style.width = "110px"
j2.style.height = "150px"

q2.style.width = "110px"
q2.style.height = "150px"

k2.style.width = "110px"
k2.style.height = "150px"

ace3.style.width = "110px"
ace3.style.height = "150px"

two3.style.width = "110px"
two3.style.height = "150px"

three3.style.width = "110px"
three3.style.height = "150px"

four3.style.width = "110px"
four3.style.height = "150px"

five3.style.width = "110px"
five3.style.height = "150px"

six3.style.width = "110px"
six3.style.height = "150px"

seven3.style.width = "110px"
seven3.style.height = "150px"

eight3.style.width = "110px"
eight3.style.height = "150px"

nine3.style.width = "110px"
nine3.style.height = "150px"

ten3.style.width = "110px"
ten3.style.height = "150px"

j3.style.width = "110px"
j3.style.height = "150px"

q3.style.width = "110px"
q3.style.height = "150px"

k3.style.width = "110px"
k3.style.height = "150px"

ace4.style.width = "110px"
ace4.style.height = "150px"

two4.style.width = "110px"
two4.style.height = "150px"

three4.style.width = "110px"
three4.style.height = "150px"

four4.style.width = "110px"
four4.style.height = "150px"

five4.style.width = "110px"
five4.style.height = "150px"

six4.style.width = "110px"
six4.style.height = "150px"

seven4.style.width = "110px"
seven4.style.height = "150px"

eight4.style.width = "110px"
eight4.style.height = "150px"

nine4.style.width = "110px"
nine4.style.height = "150px"

ten4.style.width = "110px"
ten4.style.height = "150px"

j4.style.width = "110px"
j4.style.height = "150px"

q4.style.width = "110px"
q4.style.height = "150px"

k4.style.width = "110px"
k4.style.height = "150px"

ace5.style.width = "110px"
ace5.style.height = "150px"

two5.style.width = "110px"
two5.style.height = "150px"

three5.style.width = "110px"
three5.style.height = "150px"

four5.style.width = "110px"
four5.style.height = "150px"

five5.style.width = "110px"
five5.style.height = "150px"

six5.style.width = "110px"
six5.style.height = "150px"

seven5.style.width = "110px"
seven5.style.height = "150px"

eight5.style.width = "110px"
eight5.style.height = "150px"

nine5.style.width = "110px"
nine5.style.height = "150px"

ten5.style.width = "110px"
ten5.style.height = "150px"

j5.style.width = "110px"
j5.style.height = "150px"

q5.style.width = "110px"
q5.style.height = "150px"

k5.style.width = "110px"
k5.style.height = "150px"

ace6.style.width = "110px"
ace6.style.height = "150px"

two6.style.width = "110px"
two6.style.height = "150px"

three6.style.width = "110px"
three6.style.height = "150px"

four6.style.width = "110px"
four6.style.height = "150px"

five6.style.width = "110px"
five6.style.height = "150px"

six6.style.width = "110px"
six6.style.height = "150px"

seven6.style.width = "110px"
seven6.style.height = "150px"

eight6.style.width = "110px"
eight6.style.height = "150px"

nine6.style.width = "110px"
nine6.style.height = "150px"

ten6.style.width = "110px"
ten6.style.height = "150px"

j6.style.width = "110px"
j6.style.height = "150px"

q6.style.width = "110px"
q6.style.height = "150px"

k6.style.width = "110px"
k6.style.height = "150px"

ace7.style.width = "110px"
ace7.style.height = "150px"

two7.style.width = "110px"
two7.style.height = "150px"

three7.style.width = "110px"
three7.style.height = "150px"

four7.style.width = "110px"
four7.style.height = "150px"

five7.style.width = "110px"
five7.style.height = "150px"

six7.style.width = "110px"
six7.style.height = "150px"

seven7.style.width = "110px"
seven7.style.height = "150px"

eight7.style.width = "110px"
eight7.style.height = "150px"

nine7.style.width = "110px"
nine7.style.height = "150px"

ten7.style.width = "110px"
ten7.style.height = "150px"

j7.style.width = "110px"
j7.style.height = "150px"

q7.style.width = "110px"
q7.style.height = "150px"

k7.style.width = "110px"
k7.style.height = "150px"

ace8.style.width = "110px"
ace8.style.height = "150px"

two8.style.width = "110px"
two8.style.height = "150px"

three8.style.width = "110px"
three8.style.height = "150px"

four8.style.width = "110px"
four8.style.height = "150px"

five8.style.width = "110px"
five8.style.height = "150px"

six8.style.width = "110px"
six8.style.height = "150px"

seven8.style.width = "110px"
seven8.style.height = "150px"

eight8.style.width = "110px"
eight8.style.height = "150px"

nine8.style.width = "110px"
nine8.style.height = "150px"

ten8.style.width = "110px"
ten8.style.height = "150px"

j8.style.width = "110px"
j8.style.height = "150px"

q8.style.width = "110px"
q8.style.height = "150px"

k8.style.width = "110px"
k8.style.height = "150px"

ace9.style.width = "110px"
ace9.style.height = "150px"

two9.style.width = "110px"
two9.style.height = "150px"

three9.style.width = "110px"
three9.style.height = "150px"

four9.style.width = "110px"
four9.style.height = "150px"

five9.style.width = "110px"
five9.style.height = "150px"

six9.style.width = "110px"
six9.style.height = "150px"

seven9.style.width = "110px"
seven9.style.height = "150px"

eight9.style.width = "110px"
eight9.style.height = "150px"

nine9.style.width = "110px"
nine9.style.height = "150px"

ten9.style.width = "110px"
ten9.style.height = "150px"

j9.style.width = "110px"
j9.style.height = "150px"

q9.style.width = "110px"
q9.style.height = "150px"

k9.style.width = "110px"
k9.style.height = "150px"

ace10.style.width = "110px"
ace10.style.height = "150px"

two10.style.width = "110px"
two10.style.height = "150px"

three10.style.width = "110px"
three10.style.height = "150px"

four10.style.width = "110px"
four10.style.height = "150px"

five10.style.width = "110px"
five10.style.height = "150px"

six10.style.width = "110px"
six10.style.height = "150px"

seven10.style.width = "110px"
seven10.style.height = "150px"

eight10.style.width = "110px"
eight10.style.height = "150px"

nine10.style.width = "110px"
nine10.style.height = "150px"

ten10.style.width = "110px"
ten10.style.height = "150px"

j10.style.width = "110px"
j10.style.height = "150px"

q10.style.width = "110px"
q10.style.height = "150px"

k10.style.width = "110px"
k10.style.height = "150px"

ace11.style.width = "110px"
ace11.style.height = "150px"

two11.style.width = "110px"
two11.style.height = "150px"

three11.style.width = "110px"
three11.style.height = "150px"

four11.style.width = "110px"
four11.style.height = "150px"

five11.style.width = "110px"
five11.style.height = "150px"

six11.style.width = "110px"
six11.style.height = "150px"

seven11.style.width = "110px"
seven11.style.height = "150px"

eight11.style.width = "110px"
eight11.style.height = "150px"

nine11.style.width = "110px"
nine11.style.height = "150px"

ten11.style.width = "110px"
ten11.style.height = "150px"

j11.style.width = "110px"
j11.style.height = "150px"

q11.style.width = "110px"
q11.style.height = "150px"

k11.style.width = "110px"
k11.style.height = "150px"

aced.style.width = "110px"
aced.style.height = "150px"

twod.style.width = "110px"
twod.style.height = "150px"

threed.style.width = "110px"
threed.style.height = "150px"

fourd.style.width = "110px"
fourd.style.height = "150px"

fived.style.width = "110px"
fived.style.height = "150px"

sixd.style.width = "110px"
sixd.style.height = "150px"

sevend.style.width = "110px"
sevend.style.height = "150px"

eightd.style.width = "110px"
eightd.style.height = "150px"

nined.style.width = "110px"
nined.style.height = "150px"

tend.style.width = "110px"
tend.style.height = "150px"

jd.style.width = "110px"
jd.style.height = "150px"

qd.style.width = "110px"
qd.style.height = "150px"

kd.style.width = "110px"
kd.style.height = "150px"

aced2.style.width = "110px"
aced2.style.height = "150px"

twod2.style.width = "110px"
twod2.style.height = "150px"

threed2.style.width = "110px"
threed2.style.height = "150px"

fourd2.style.width = "110px"
fourd2.style.height = "150px"

fived2.style.width = "110px"
fived2.style.height = "150px"

sixd2.style.width = "110px"
sixd2.style.height = "150px"

sevend2.style.width = "110px"
sevend2.style.height = "150px"

eightd2.style.width = "110px"
eightd.style.height = "150px"

nined2.style.width = "110px"
nined2.style.height = "150px"

tend2.style.width = "110px"
tend2.style.height = "150px"

jd2.style.width = "110px"
jd2.style.height = "150px"

qd2.style.width = "110px"
qd2.style.height = "150px"

kd2.style.width = "110px"
kd2.style.height = "150px"

aced3.style.width = "110px"
aced3.style.height = "150px"

twod3.style.width = "110px"
twod3.style.height = "150px"

threed3.style.width = "110px"
threed3.style.height = "150px"

fourd3.style.width = "110px"
fourd3.style.height = "150px"

fived3.style.width = "110px"
fived3.style.height = "150px"

sixd3.style.width = "110px"
sixd3.style.height = "150px"

sevend3.style.width = "110px"
sevend3.style.height = "150px"

eightd3.style.width = "110px"
eightd3.style.height = "150px"

nined3.style.width = "110px"
nined3.style.height = "150px"

tend3.style.width = "110px"
tend3.style.height = "150px"

jd3.style.width = "110px"
jd3.style.height = "150px"

qd3.style.width = "110px"
qd3.style.height = "150px"

kd3.style.width = "110px"
kd3.style.height = "150px"

aced4.style.width = "110px"
aced4.style.height = "150px"

twod4.style.width = "110px"
twod4.style.height = "150px"

threed4.style.width = "110px"
threed4.style.height = "150px"

fourd4.style.width = "110px"
fourd4.style.height = "150px"

fived4.style.width = "110px"
fived4.style.height = "150px"

sixd4.style.width = "110px"
sixd4.style.height = "150px"

sevend4.style.width = "110px"
sevend4.style.height = "150px"

eightd4.style.width = "110px"
eightd4.style.height = "150px"

nined4.style.width = "110px"
nined4.style.height = "150px"

tend4.style.width = "110px"
tend4.style.height = "150px"

jd4.style.width = "110px"
jd4.style.height = "150px"

qd4.style.width = "110px"
qd4.style.height = "150px"

kd4.style.width = "110px"
kd4.style.height = "150px"

aced5.style.width = "110px"
aced5.style.height = "150px"

twod5.style.width = "110px"
twod5.style.height = "150px"

threed5.style.width = "110px"
threed5.style.height = "150px"

fourd5.style.width = "110px"
fourd5.style.height = "150px"

fived5.style.width = "110px"
fived5.style.height = "150px"

sixd5.style.width = "110px"
sixd5.style.height = "150px"

sevend5.style.width = "110px"
sevend5.style.height = "150px"

eightd5.style.width = "110px"
eightd5.style.height = "150px"

nined5.style.width = "110px"
nined5.style.height = "150px"

tend5.style.width = "110px"
tend5.style.height = "150px"

jd5.style.width = "110px"
jd5.style.height = "150px"

qd5.style.width = "110px"
qd5.style.height = "150px"

kd5.style.width = "110px"
kd5.style.height = "150px"

aced6.style.width = "110px"
aced6.style.height = "150px"

twod6.style.width = "110px"
twod6.style.height = "150px"

threed6.style.width = "110px"
threed6.style.height = "150px"

fourd6.style.width = "110px"
fourd6.style.height = "150px"

fived6.style.width = "110px"
fived6.style.height = "150px"

sixd6.style.width = "110px"
sixd6.style.height = "150px"

sevend6.style.width = "110px"
sevend6.style.height = "150px"

eightd6.style.width = "110px"
eightd6.style.height = "150px"

nined6.style.width = "110px"
nined6.style.height = "150px"

tend6.style.width = "110px"
tend6.style.height = "150px"

jd6.style.width = "110px"
jd6.style.height = "150px"

qd6.style.width = "110px"
qd6.style.height = "150px"

kd6.style.width = "110px"
kd6.style.height = "150px"

aced7.style.width = "110px"
aced7.style.height = "150px"

twod7.style.width = "110px"
twod7.style.height = "150px"

threed7.style.width = "110px"
threed7.style.height = "150px"

fourd7.style.width = "110px"
fourd7.style.height = "150px"

fived7.style.width = "110px"
fived7.style.height = "150px"

sixd7.style.width = "110px"
sixd7.style.height = "150px"

sevend7.style.width = "110px"
sevend7.style.height = "150px"

eightd7.style.width = "110px"
eightd7.style.height = "150px"

nined7.style.width = "110px"
nined7.style.height = "150px"

tend7.style.width = "110px"
tend7.style.height = "150px"

jd7.style.width = "110px"
jd7.style.height = "150px"

qd7.style.width = "110px"
qd7.style.height = "150px"

kd7.style.width = "110px"
kd7.style.height = "150px"

aced8.style.width = "110px"
aced8.style.height = "150px"

twod8.style.width = "110px"
twod8.style.height = "150px"

threed8.style.width = "110px"
threed8.style.height = "150px"

fourd8.style.width = "110px"
fourd8.style.height = "150px"

fived8.style.width = "110px"
fived8.style.height = "150px"

sixd8.style.width = "110px"
sixd8.style.height = "150px"

sevend8.style.width = "110px"
sevend8.style.height = "150px"

eightd8.style.width = "110px"
eightd8.style.height = "150px"

nined8.style.width = "110px"
nined8.style.height = "150px"

tend8.style.width = "110px"
tend8.style.height = "150px"

jd8.style.width = "110px"
jd8.style.height = "150px"

qd8.style.width = "110px"
qd8.style.height = "150px"

kd8.style.width = "110px"
kd8.style.height = "150px"

aced9.style.width = "110px"
aced9.style.height = "150px"

twod9.style.width = "110px"
twod9.style.height = "150px"

threed9.style.width = "110px"
threed9.style.height = "150px"

fourd9.style.width = "110px"
fourd9.style.height = "150px"

fived9.style.width = "110px"
fived9.style.height = "150px"

sixd9.style.width = "110px"
sixd9.style.height = "150px"

sevend9.style.width = "110px"
sevend9.style.height = "150px"

eightd9.style.width = "110px"
eightd9.style.height = "150px"

nined9.style.width = "110px"
nined9.style.height = "150px"

tend9.style.width = "110px"
tend9.style.height = "150px"

jd9.style.width = "110px"
jd9.style.height = "150px"

qd9.style.width = "110px"
qd9.style.height = "150px"

kd9.style.width = "110px"
kd9.style.height = "150px"

aced10.style.width = "110px"
aced10.style.height = "150px"

twod10.style.width = "110px"
twod10.style.height = "150px"

threed10.style.width = "110px"
threed10.style.height = "150px"

fourd10.style.width = "110px"
fourd10.style.height = "150px"

fived10.style.width = "110px"
fived10.style.height = "150px"

sixd10.style.width = "110px"
sixd10.style.height = "150px"

sevend10.style.width = "110px"
sevend10.style.height = "150px"

eightd10.style.width = "110px"
eightd10.style.height = "150px"

nined10.style.width = "110px"
nined10.style.height = "150px"

tend10.style.width = "110px"
tend10.style.height = "150px"

jd10.style.width = "110px"
jd10.style.height = "150px"

qd10.style.width = "110px"
qd10.style.height = "150px"

kd10.style.width = "110px"
kd10.style.height = "150px"

aced11.style.width = "110px"
aced11.style.height = "150px"

twod11.style.width = "110px"
twod11.style.height = "150px"

threed11.style.width = "110px"
threed11.style.height = "150px"

fourd11.style.width = "110px"
fourd11.style.height = "150px"

fived11.style.width = "110px"
fived11.style.height = "150px"

sixd11.style.width = "110px"
sixd11.style.height = "150px"

sevend11.style.width = "110px"
sevend11.style.height = "150px"

eightd11.style.width = "110px"
eightd11.style.height = "150px"

nined11.style.width = "110px"
nined11.style.height = "150px"

tend11.style.width = "110px"
tend11.style.height = "150px"

jd11.style.width = "110px"
jd11.style.height = "150px"

qd11.style.width = "110px"
qd11.style.height = "150px"

kd11.style.width = "110px"
kd11.style.height = "150px"

let playercards = document.getElementById("cards_player")
let dealercards = document.getElementById("cards_dealer")

let playercardstop1 = [ace, two, three, four, five, six, seven, eight, nine, ten, j, q, k]
let dealercardstop1 = [aced, twod, threed, fourd, fived, sixd, sevend, eightd, nined, tend, jd, qd, kd]

let playercardstop2 = [ace2, two2, three2, four2, five2, six2, seven2, eight2, nine2, ten2, j2, q2, k2]
let dealercardstop2 = [aced2, twod2, threed2, fourd2, fived2, sixd2, sevend2, eightd2, nined2, tend2, jd2, qd2, kd2]

let playercardstop3 = [ace3, two3, three3, four3, five3, six3, seven3, eight3, nine3, ten3, j3, q3, k3]
let dealercardstop3 = [aced3, twod3, threed3, fourd3, fived3, sixd3, sevend3, eightd3, nined3, tend3, jd3, qd3, kd3]

let playercardstop4 = [ace4, two4, three4, four4, five4, six4, seven4, eight4, nine4, ten4, j4, q4, k4]
let dealercardstop4 = [aced4, twod4, threed4, fourd4, fived4, sixd4, sevend4, eightd4, nined4, tend4, jd4, qd4, kd4]

let playercardstop5 = [ace5, two5, three5, four5, five5, six5, seven5, eight5, nine5, ten5, j5, q5, k5]
let dealercardstop5 = [aced5, twod5, threed5, fourd5, fived5, sixd5, sevend5, eightd5, nined5, tend5, jd5, qd5, kd5]

let playercardstop6 = [ace6, two6, three6, four6, five6, six6, seven6, eight6, nine6, ten6, j6, q6, k6]
let dealercardstop6 = [aced6, twod6, threed6, fourd6, fived6, sixd6, sevend6, eightd6, nined6, tend6, jd6, qd6, kd6]

let playercardstop7 = [ace7, two7, three7, four7, five7, six7, seven7, eight7, nine7, ten7, j7, q7, k7]
let dealercardstop7 = [aced7, twod7, threed7, fourd7, fived7, sixd7, sevend7, eightd7, nined7, tend7, jd7, qd7, kd7]

let playercardstop8 = [ace8, two8, three8, four8, five8, six8, seven8, eight8, nine8, ten8, j8, q8, k8]
let dealercardstop8 = [aced8, twod8, threed8, fourd8, fived8, sixd8, sevend8, eightd8, nined8, tend8, jd8, qd8, kd8]

let playercardstop9 = [ace9, two9, three9, four9, five9, six9, seven9, eight9, nine9, ten9, j9, q9, k9]
let dealercardstop9 = [aced9, twod9, threed9, fourd9, fived9, sixd9, sevend9, eightd9, nined9, tend9, jd9, qd9, kd9]

let playercardstop10 = [ace10, two10, three10, four10, five10, six10, seven10, eight10, nine10, ten10, j10, q10, k10]
let dealercardstop10 = [aced10, twod10, threed10, fourd10, fived10, sixd10, sevend10, eightd10, nined10, tend10, jd10, qd10, kd10]

let playercardstop11 = [ace11, two11, three11, four11, five11, six11, seven11, eight11, nine11, ten11, j11, q11, k11]
let dealercardstop11 = [aced11, twod11, threed11, fourd11, fived11, sixd11, sevend11, eightd11, nined11, tend11, jd11, qd11, kd11]

let player_card1 = playercardstop1[Math.floor(Math.random() * playercardstop1.length)]
let player_card2 = playercardstop2[Math.floor(Math.random() * playercardstop2.length)]

let dealer_card1 = dealercardstop1[Math.floor(Math.random() * dealercardstop1.length)]
let dealer_card2 = dealercardstop2[Math.floor(Math.random() * dealercardstop2.length)]
let dealer_card_back = back

function startgame() {
    rules.innerHTML = " "
    playbtn.innerHTML = " "
    playboard.style.visibility = "visible"
    buttons.style.visibility = "visible"

    playercards.appendChild(player_card1)
    playercards.appendChild(player_card2)
    
    dealercards.appendChild(dealer_card1)
    dealercards.appendChild(dealer_card_back)

    calcplayer()
    calcdealer()

    if (nextplayerscr == 21) {
        stand()

        if (nextdealerscr > 16) {
            if(nextdealerscr < 21) {
                document.getElementById("result").innerHTML = "Player BlackJack, You Win!"
            } else if (nextdealerscr == 21) {
                document.getElementById("result").innerHTML = "Push"
            } else if (nextdealerscr > 21) {
                document.getElementById("result").innerHTML = "Player BlackJack And Dealer Bust, You Win!"
            }
        } 
    }     
}

function hit() {
    if (playercardsNo == 2) {
        player_card3 = playercardstop3[Math.floor(Math.random() * playercardstop3.length)]
        playercards.appendChild(player_card3)
        playercardsNo += 1
        if (player_card3 == ace3) {
            if (player_card1 == ace || player_card2 == ace2) {
                addplayerscr += 1
            } else {
                if (nextplayerscr + 11 > 21) {
                    addplayerscr += 1
                } else {
                    addplayerscr += 11
                }
            }
        } else if (player_card3 == two3) {
            addplayerscr += 2
        } else if (player_card3 == three3) {
            addplayerscr += 3
        } else if (player_card3 == four3) {
            addplayerscr += 4
        } else if (player_card3 == five3) {
            addplayerscr += 5
        } else if (player_card3 == six3) {
            addplayerscr += 6
        } else if (player_card3 == seven3) {
            addplayerscr += 7
        } else if (player_card3 == eight3) {
            addplayerscr += 8
        } else if (player_card3 == nine3) {
            addplayerscr += 9
        } else if (player_card3 == ten3 || j3 || q3 || k3) {
            addplayerscr += 10
        }
    } else if (playercardsNo == 3) {
        player_card4 = playercardstop4[Math.floor(Math.random() * playercardstop4.length)]
        playercards.appendChild(player_card4)
        playercardsNo += 1
        if (player_card4 == ace4) {
            if (player_card1 == ace || player_card2 == ace2 || player_card3 == ace3) {
                addplayerscr += 1
            } else {
                if (nextplayerscr + 11 > 21) {
                    addplayerscr += 1
                } else {
                    addplayerscr += 11
                }
            }
        } else if (player_card4 == two4) {
            addplayerscr += 2
        } else if (player_card4 == three4) {
            addplayerscr += 3
        } else if (player_card4 == four4) {
            addplayerscr += 4
        } else if (player_card4 == five4) {
            addplayerscr += 5
        } else if (player_card4 == six4) {
            addplayerscr += 6
        } else if (player_card4 == seven4) {
            addplayerscr += 7
        } else if (player_card4 == eight4) {
            addplayerscr += 8
        } else if (player_card4 == nine4) {
            addplayerscr += 9
        } else if (player_card4 == ten4 || j4 || q4 || k4) {
            addplayerscr += 10
        }
    } else if (playercardsNo == 4) {
        player_card5 =  playercardstop5[Math.floor(Math.random() * playercardstop5.length)]
        playercards.appendChild(player_card5)
        playercardsNo += 1
        if (player_card5 == ace5) {
            if (player_card1 == ace || player_card2 == ace2 || player_card3 == ace3 || player_card4 == ace4) {
                addplayerscr += 1
            } else {
                if (nextplayerscr + 11 > 21) {
                    addplayerscr += 1
                } else {
                    addplayerscr += 11
                }
            }
        } else if (player_card5 == two5) {
            addplayerscr += 2
        } else if (player_card5 == three5) {
            addplayerscr += 3
        } else if (player_card5 == four5) {
            addplayerscr += 4
        } else if (player_card5 == five5) {
            addplayerscr += 5
        } else if (player_card5 == six5) {
            addplayerscr += 6
        } else if (player_card5 == seven5) {
            addplayerscr += 7
        } else if (player_card5 == eight5) {
            addplayerscr += 8
        } else if (player_card5 == nine5) {
            addplayerscr += 9
        } else if (player_card5 == ten5 || j5 || q5 || k5) {
            addplayerscr += 10
        }
    } else if (playercardsNo == 5) {
        player_card6 =  playercardstop6[Math.floor(Math.random() * playercardstop6.length)]
        playercards.appendChild(player_card6)
        playercardsNo += 1
        if (player_card6 == ace6) {
            if (player_card1 == ace || player_card2 == ace2 || player_card3 == ace3 || player_card4 == ace4 || player_card5 == ace5) {
                addplayerscr += 1
            } else {
                if (nextplayerscr + 11 > 21) {
                    addplayerscr += 1
                } else {
                    addplayerscr += 11
                }
            }
        } else if (player_card6 == two6) {
            addplayerscr += 2
        } else if (player_card6 == three6) {
            addplayerscr += 3
        } else if (player_card6 == four6) {
            addplayerscr += 4
        } else if (player_card6 == five6) {
            addplayerscr += 5
        } else if (player_card6 == six6) {
            addplayerscr += 6
        } else if (player_card6 == seven6) {
            addplayerscr += 7
        } else if (player_card6 == eight6) {
            addplayerscr += 8
        } else if (player_card6 == nine6) {
            addplayerscr += 9
        } else if (player_card6 == ten6 || j6 || q6 || k6) {
            addplayerscr += 10
        }
    } else if (playercardsNo == 6) {
        player_card7 =  playercardstop7[Math.floor(Math.random() * playercardstop7.length)]
        playercards.appendChild(player_card7)
        playercardsNo += 1
        if (player_card7 == ace7) {
            if (player_card1 == ace || player_card2 == ace2 || player_card3 == ace3 || player_card4 == ace4 || player_card5 == ace5 || player_card6 == ace6) {
                addplayerscr += 1
            } else {
                if (nextplayerscr + 11 > 21) {
                    addplayerscr += 1
                } else {
                    addplayerscr += 11
                }
            }
        } else if (player_card7 == two7) {
            addplayerscr += 2
        } else if (player_card7 == three7) {
            addplayerscr += 3
        } else if (player_card7 == four7) {
            addplayerscr += 4
        } else if (player_card7 == five7) {
            addplayerscr += 5
        } else if (player_card7 == six7) {
            addplayerscr += 6
        } else if (player_card7 == seven7) {
            addplayerscr += 7
        } else if (player_card7 == eight7) {
            addplayerscr += 8
        } else if (player_card7 == nine7) {
            addplayerscr += 9
        } else if (player_card7 == ten7 || j7 || q7 || k7) {
            addplayerscr += 10
        }
    } else if (playercardsNo == 7) {
        player_card8 =  playercardstop8[Math.floor(Math.random() * playercardstop8.length)]
        playercards.appendChild(player_card8)
        playercardsNo += 1
        if (player_card8 == ace8) {
            if (player_card1 == ace || player_card2 == ace2 || player_card3 == ace3 || player_card4 == ace4 || player_card5 == ace5 || player_card6 == ace6 || player_card7 == ace7) {
                addplayerscr += 1
            } else {
                if (nextplayerscr + 11 > 21) {
                    addplayerscr += 1
                } else {
                    addplayerscr += 11
                }
            }
        } else if (player_card8 == two8) {
            addplayerscr += 2
        } else if (player_card8 == three8) {
            addplayerscr += 3
        } else if (player_card8 == four8) {
            addplayerscr += 4
        } else if (player_card8 == five8) {
            addplayerscr += 5
        } else if (player_card8 == six8) {
            addplayerscr += 6
        } else if (player_card8 == seven8) {
            addplayerscr += 7
        } else if (player_card8 == eight8) {
            addplayerscr += 8
        } else if (player_card8 == nine8) {
            addplayerscr += 9
        } else if (player_card8 == ten8 || j8 || q8 || k8) {
            addplayerscr += 10
        }
    } else if (playercardsNo == 8) {
        player_card9 =  playercardstop9[Math.floor(Math.random() * playercardstop9.length)]
        playercards.appendChild(player_card9)
        playercardsNo += 1
        if (player_card9 == ace9) {
            if (player_card1 == ace || player_card2 == ace2 || player_card3 == ace3 || player_card4 == ace4 || player_card5 == ace5 || player_card6 == ace6 || player_card7 == ace7 || player_card8 == ace8) {
                addplayerscr += 1
            } else {
                if (nextplayerscr + 11 > 21) {
                    addplayerscr += 1
                } else {
                    addplayerscr += 11
                }
            }
        } else if (player_card9 == two9) {
            addplayerscr += 2
        } else if (player_card9 == three9) {
            addplayerscr += 3
        } else if (player_card9 == four9) {
            addplayerscr += 4
        } else if (player_card9 == five9) {
            addplayerscr += 5
        } else if (player_card9 == six9) {
            addplayerscr += 6
        } else if (player_card9 == seven9) {
            addplayerscr += 7
        } else if (player_card9 == eight9) {
            addplayerscr += 8
        } else if (player_card9 == nine9) {
            addplayerscr += 9
        } else if (player_card9 == ten9 || j9 || q9 || k9) {
            addplayerscr += 10
        }
    } else if (playercardsNo == 9) {
        player_card10 =  playercardstop10[Math.floor(Math.random() * playercardstop10.length)]
        playercards.appendChild(player_card10)
        playercardsNo += 1
        if (player_card10 == ace10) {
            if (player_card1 == ace || player_card2 == ace2 || player_card3 == ace3 || player_card4 == ace4 || player_card5 == ace5 || player_card6 == ace6 || player_card7 == ace7 || player_card8 == ace8 || player_card9 == ace9) {
                addplayerscr += 1
            } else {
                if (nextplayerscr + 11 > 21) {
                    addplayerscr += 1
                } else {
                    addplayerscr += 11
                }
            }
        } else if (player_card10 == two10) {
            addplayerscr += 2
        } else if (player_card10 == three10) {
            addplayerscr += 3
        } else if (player_card10 == four10) {
            addplayerscr += 4
        } else if (player_card10 == five10) {
            addplayerscr += 5
        } else if (player_card10 == six10) {
            addplayerscr += 6
        } else if (player_card10 == seven10) {
            addplayerscr += 7
        } else if (player_card10 == eight10) {
            addplayerscr += 8
        } else if (player_card10 == nine10) {
            addplayerscr += 9
        } else if (player_card10 == ten10 || j10 || q10 || k10) {
            addplayerscr += 10
        }
    } else if (playercardsNo == 10) {
        player_card11 =  playercardstop11[Math.floor(Math.random() * playercardstop11.length)]
        playercards.appendChild(player_card11)
        playercardsNo += 1
        if (player_card11 == ace11) {
            if (player_card1 == ace || player_card2 == ace2 || player_card3 == ace3 || player_card4 == ace4 || player_card5 == ace5 || player_card6 == ace6 || player_card7 == ace7 || player_card8 == ace8 || player_card9 == ace9 || player_card10 == ace10) {
                addplayerscr += 1
            } else {
                if (nextplayerscr + 11 > 21) {
                    addplayerscr += 1
                } else {
                    addplayerscr += 11
                }
            }
        } else if (player_card11 == two11) {
            addplayerscr += 2
        } else if (player_card11 == three11) {
            addplayerscr += 3
        } else if (player_card11 == four11) {
            addplayerscr += 4
        } else if (player_card11 == five11) {
            addplayerscr += 5
        } else if (player_card11 == six11) {
            addplayerscr += 6
        } else if (player_card11 == seven11) {
            addplayerscr += 7
        } else if (player_card11 == eight11) {
            addplayerscr += 8
        } else if (player_card11 == nine11) {
            addplayerscr += 9
        } else if (player_card11 == ten11 || j11 || q11 || k11) {
            addplayerscr += 10
        }
    }
    addplayerscore()

    if (nextplayerscr > 21) {
        playerresult = "You Busted!"
        document.getElementById("result").innerHTML = playerresult
        hit = function() {}
        stand = function() {}
    }

    if (nextplayerscr == 21) {
        hit = function() {}
        stand()
        winorloss()
    }
}

function calcplayer() {
    if (player_card1 == ace) {
        startscoreplayer += 11
    } else if (player_card1 == two) {
        startscoreplayer += 2
    } else if (player_card1 == three) {
        startscoreplayer += 3
    } else if (player_card1 == four) {
        startscoreplayer += 4
    } else if (player_card1 == five) {
        startscoreplayer += 5
    } else if (player_card1 == six) {
        startscoreplayer += 6
    } else if (player_card1 == seven) {
        startscoreplayer += 7
    } else if (player_card1 == eight) {
        startscoreplayer += 8
    } else if (player_card1 == nine) {
        startscoreplayer += 9
    } else if (player_card1 == ten || j || q || k) {
        startscoreplayer += 10
    }

    if (player_card2 == ace2) {
        if (player_card1 == ace) {
            addplayerscr += 1
        } else {
            addplayerscr += 11
        }
    } else if (player_card2 == two2) {
        addplayerscr += 2
    } else if (player_card2 == three2) {
        addplayerscr += 3
    } else if (player_card2 == four2) {
        addplayerscr += 4
    } else if (player_card2 == five2) {
        addplayerscr += 5
    } else if (player_card2 == six2) {
        addplayerscr += 6
    } else if (player_card2 == seven2) {
        addplayerscr += 7
    } else if (player_card2 == eight2) {
        addplayerscr += 8
    } else if (player_card2 == nine2) {
        addplayerscr += 9
    } else if (player_card2 == ten2 || j2 || q2 || k2) {
        addplayerscr += 10
    } 
    
    addplayerscore()
}

function addplayerscore () {
    nextplayerscr = startscoreplayer + addplayerscr
    player_score.innerHTML = "You: " + nextplayerscr 
} 

function adddealerscore () {
    nextdealerscr = startscoredealer + adddealerscr
    dealer_score.innerHTML = "Dealer: " + nextdealerscr
}

function calcdealer() {
    if (dealer_card1 == aced) {
        startscoredealer += 11
    } else if (dealer_card1 == twod) {
        startscoredealer += 2
    } else if (dealer_card1 == threed) {
        startscoredealer += 3
    } else if (dealer_card1 == fourd) {
        startscoredealer += 4
    } else if (dealer_card1 == fived) {
        startscoredealer += 5
    } else if (dealer_card1 == sixd) {
        startscoredealer += 6
    } else if (dealer_card1 == sevend) {
        startscoredealer += 7
    } else if (dealer_card1 == eightd) {
        startscoredealer += 8
    } else if (dealer_card1 == nined) {
        startscoredealer += 9
    } else if (dealer_card1 == tend || jd || qd || kd ) {
        startscoredealer += 10
    }
    
    dealer_score.innerHTML = "Dealer: " + startscoredealer

    
}

function anothercard1() {
    if (nextdealerscr < 17) {
        dealer_card3 = dealercardstop3[Math.floor(Math.random() * dealercardstop3.length)]
        dealercards.appendChild(dealer_card3)
        dealercardsNo += 1
        
        if (dealer_card3 == aced3) {
            if (dealer_card1 == aced || dealer_card2 == aced2) {
                adddealerscr += 1
            } else {
                if (nextdealerscr + 11 > 21) {
                    adddealerscr += 1
                } else {
                    adddealerscr += 11
                }
            }
        } else if (dealer_card3 == twod3) {
            adddealerscr += 2
        } else if (dealer_card3 == threed3) {
            adddealerscr += 3
        } else if (dealer_card3 == fourd3) {
            adddealerscr += 4
        } else if (dealer_card3 == fived3) {
            adddealerscr += 5
        } else if (dealer_card3 == sixd3) {
            adddealerscr += 6
        } else if (dealer_card3 == sevend3) {
            adddealerscr += 7
        } else if (dealer_card3 == eightd3) {
            adddealerscr += 8
        } else if (dealer_card3 == nined3) {
            adddealerscr += 9
        } else if (dealer_card3 == tend3 || jd3 || qd3 || kd3) {
            adddealerscr += 10
        }

        adddealerscore()

        if (nextdealerscr < 17) {
            setTimeout(anothercard2, 1000)
        } else if (nextdealerscr >= 17) {
            if (nextplayerscr != 21) {
                winorloss()
            }
        }

        if (nextdealerscr > 16 && nextplayerscr == 21 && playercardsNo == 2) {
            if(nextdealerscr < 21) {
                document.getElementById("result").innerHTML = "Player BlackJack, You Win!"
            } else if (nextdealerscr == 21) {
                document.getElementById("result").innerHTML = "Push"
            } else if (nextdealerscr > 21) {
                document.getElementById("result").innerHTML = "Player BlackJack And Dealer Bust, You Win!"
            }
        }
    }
}

function anothercard2() {
    if (nextdealerscr < 17) {
        dealer_card4 = dealercardstop4[Math.floor(Math.random() * dealercardstop4.length)]
        dealercards.appendChild(dealer_card4)
        dealercardsNo += 1
        
        if (dealer_card4 == aced4) {
            if (dealer_card1 == aced || dealer_card2 == aced2 || dealer_card3 == aced3) {
                adddealerscr += 1
            } else {
                if (nextdealerscr + 11 > 21) {
                    adddealerscr += 1
                } else {
                    adddealerscr += 11
                }
            }
        } else if (dealer_card4 == twod4) {
            adddealerscr += 2
        } else if (dealer_card4 == threed4) {
            adddealerscr += 3
        } else if (dealer_card4 == fourd4) {
            adddealerscr += 4
        } else if (dealer_card4 == fived4) {
            adddealerscr += 5
        } else if (dealer_card4 == sixd4) {
            adddealerscr += 6
        } else if (dealer_card4 == sevend4) {
            adddealerscr += 7
        } else if (dealer_card4 == eightd4) {
            adddealerscr += 8
        } else if (dealer_card4 == nined4) {
            adddealerscr += 9
        } else if (dealer_card4 == tend4 || jd4 || qd4 || kd4) {
            adddealerscr += 10
        }

        adddealerscore()

        if (nextdealerscr < 17) {
            setTimeout(anothercard3, 1000)
        } else if (nextdealerscr >= 17){
            if (nextplayerscr != 21) {
                winorloss()
            }
        }

        if (nextdealerscr > 16 && nextplayerscr == 21 && playercardsNo == 2) {
            if(nextdealerscr < 21) {
                document.getElementById("result").innerHTML = "Player BlackJack, You Win!"
            } else if (nextdealerscr == 21) {
                document.getElementById("result").innerHTML = "Push"
            } else if (nextdealerscr > 21) {
                document.getElementById("result").innerHTML = "Player BlackJack And Dealer Bust, You Win!"
            }
        }
    }
}

function anothercard3() {
    if (nextdealerscr < 17) {
        dealer_card5 = dealercardstop5[Math.floor(Math.random() * dealercardstop5.length)]
        dealercards.appendChild(dealer_card5)
        dealercardsNo += 1
        
        if (dealer_card5 == aced5) {
            if (dealer_card1 == aced || dealer_card2 == aced2 || dealer_card3 == aced3 || dealer_card4 == aced4) {
                adddealerscr += 1
            } else {
                if (nextdealerscr + 11 > 21) {
                    adddealerscr += 1
                } else {
                    adddealerscr += 11
                }
            }
        } else if (dealer_card5 == twod5) {
            adddealerscr += 2
        } else if (dealer_card5 == threed5) {
            adddealerscr += 3
        } else if (dealer_card5 == fourd5) {
            adddealerscr += 4
        } else if (dealer_card5 == fived5) {
            adddealerscr += 5
        } else if (dealer_card5 == sixd5) {
            adddealerscr += 6
        } else if (dealer_card5 == sevend5) {
            adddealerscr += 7
        } else if (dealer_card5 == eightd5) {
            adddealerscr += 8
        } else if (dealer_card5 == nined5) {
            adddealerscr += 9
        } else if (dealer_card5 == tend5 || jd5 || qd5 || kd5) {
            adddealerscr += 10
        }

        adddealerscore()

        if (nextdealerscr < 17) {
            setTimeout(anothercard4, 1000)
        } else if (nextdealerscr >= 17){
            if (nextplayerscr != 21) {
                winorloss()
            }
        }

        if (nextdealerscr > 16 && nextplayerscr == 21 && playercardsNo == 2) {
            if(nextdealerscr < 21) {
                document.getElementById("result").innerHTML = "Player BlackJack, You Win!"
            } else if (nextdealerscr == 21) {
                document.getElementById("result").innerHTML = "Push"
            } else if (nextdealerscr > 21) {
                document.getElementById("result").innerHTML = "Player BlackJack And Dealer Bust, You Win!"
            }
        }
    }
}

function anothercard4() {
    if (nextdealerscr < 17) {
        dealer_card6 = dealercardstop6[Math.floor(Math.random() * dealercardstop6.length)]
        dealercards.appendChild(dealer_card6)
        dealercardsNo += 1
        
        if (dealer_card6 == aced6) {
            if (dealer_card1 == aced || dealer_card2 == aced2 || dealer_card3 == aced3 || dealer_card4 == aced4 || dealer_card5 == aced5) {
                adddealerscr += 1
            } else {
                if (nextdealerscr + 11 > 21) {
                    adddealerscr += 1
                } else {
                    adddealerscr += 11
                }
            }
        } else if (dealer_card6 == twod6) {
            adddealerscr += 2
        } else if (dealer_card6 == threed6) {
            adddealerscr += 3
        } else if (dealer_card6 == fourd6) {
            adddealerscr += 4
        } else if (dealer_card6 == fived6) {
            adddealerscr += 5
        } else if (dealer_card6 == sixd6) {
            adddealerscr += 6
        } else if (dealer_card6 == sevend6) {
            adddealerscr += 7
        } else if (dealer_card6 == eightd6) {
            adddealerscr += 8
        } else if (dealer_card6 == nined6) {
            adddealerscr += 9
        } else if (dealer_card6 == tend6 || jd6 || qd6 || kd6) {
            adddealerscr += 10
        }

        adddealerscore()

        if (nextdealerscr < 17) {
            setTimeout(anothercard5, 1000)
        } else if (nextdealerscr >= 17){
            if (nextplayerscr != 21) {
                winorloss()
            }
        }

        if (nextdealerscr > 16 && nextplayerscr == 21 && playercardsNo == 2) {
            if(nextdealerscr < 21) {
                document.getElementById("result").innerHTML = "Player BlackJack, You Win!"
            } else if (nextdealerscr == 21) {
                document.getElementById("result").innerHTML = "Push"
            } else if (nextdealerscr > 21) {
                document.getElementById("result").innerHTML = "Player BlackJack And Dealer Bust, You Win!"
            }
        }
    }
}

function anothercard5() {
    if (nextdealerscr < 17) {
        dealer_card7 = dealercardstop7[Math.floor(Math.random() * dealercardstop7.length)]
        dealercards.appendChild(dealer_card7)
        dealercardsNo += 1
        
        if (dealer_card7 == aced7) {
            if (dealer_card1 == aced || dealer_card2 == aced2 || dealer_card3 == aced3 || dealer_card4 == aced4 || dealer_card5 == aced5 || dealer_card6 == aced6) {
                adddealerscr += 1
            } else {
                if (nextdealerscr + 11 > 21) {
                    adddealerscr += 1
                } else {
                    adddealerscr += 11
                }
            }
        } else if (dealer_card7 == twod7) {
            adddealerscr += 2
        } else if (dealer_card7 == threed7) {
            adddealerscr += 3
        } else if (dealer_card7 == fourd7) {
            adddealerscr += 4
        } else if (dealer_card7 == fived7) {
            adddealerscr += 5
        } else if (dealer_card7 == sixd7) {
            adddealerscr += 6
        } else if (dealer_card7 == sevend7) {
            adddealerscr += 7
        } else if (dealer_card7 == eightd7) {
            adddealerscr += 8
        } else if (dealer_card7 == nined7) {
            adddealerscr += 9
        } else if (dealer_card7 == tend7 || jd7 || qd7 || kd7) {
            adddealerscr += 10
        }

        adddealerscore()


        if (nextdealerscr < 17) {
            setTimeout(anothercard6, 1000)
        } else if (nextdealerscr >= 17){
            if (nextplayerscr != 21) {
                winorloss()
            }
        }

        if (nextdealerscr > 16 && nextplayerscr == 21 && playercardsNo == 2) {
            if(nextdealerscr < 21) {
                document.getElementById("result").innerHTML = "Player BlackJack, You Win!"
            } else if (nextdealerscr == 21) {
                document.getElementById("result").innerHTML = "Push"
            } else if (nextdealerscr > 21) {
                document.getElementById("result").innerHTML = "Player BlackJack And Dealer Bust, You Win!"
            }
        }
    }
}

function anothercard6() {
    if (nextdealerscr < 17) {
        dealer_card8 = dealercardstop8[Math.floor(Math.random() * dealercardstop8.length)]
        dealercards.appendChild(dealer_card8)
        dealercardsNo += 1
        
        if (dealer_card8 == aced8) {
            if (dealer_card1 == aced || dealer_card2 == aced2 || dealer_card3 == aced3 || dealer_card4 == aced4 || dealer_card5 == aced5 || dealer_card6 == aced6 || dealer_card7 == aced7) {
                adddealerscr += 1
            } else {
                if (nextdealerscr + 11 > 21) {
                    adddealerscr += 1
                } else {
                    adddealerscr += 11
                }
            }
        } else if (dealer_card8 == twod8) {
            adddealerscr += 2
        } else if (dealer_card8 == threed8) {
            adddealerscr += 3
        } else if (dealer_card8 == fourd8) {
            adddealerscr += 4
        } else if (dealer_card8 == fived8) {
            adddealerscr += 5
        } else if (dealer_card8 == sixd8) {
            adddealerscr += 6
        } else if (dealer_card8 == sevend8) {
            adddealerscr += 7
        } else if (dealer_card8 == eightd8) {
            adddealerscr += 8
        } else if (dealer_card3 == nined8) {
            adddealerscr += 9
        } else if (dealer_card8 == tend8 || jd8 || qd8 || kd8) {
            adddealerscr += 10
        }

        adddealerscore()


        if (nextdealerscr < 17) {
            setTimeout(anothercard7, 1000)
        } else if (nextdealerscr >= 17){
            if (nextplayerscr != 21) {
                winorloss()
            }
        }

        if (nextdealerscr > 16 && nextplayerscr == 21 && playercardsNo == 2) {
            if(nextdealerscr < 21) {
                document.getElementById("result").innerHTML = "Player BlackJack, You Win!"
            } else if (nextdealerscr == 21) {
                document.getElementById("result").innerHTML = "Push"
            } else if (nextdealerscr > 21) {
                document.getElementById("result").innerHTML = "Player BlackJack And Dealer Bust, You Win!"
            }
        }
    }
}

function anothercard7() {
    if (nextdealerscr < 17) {
        dealer_card9 = dealercardstop9[Math.floor(Math.random() * dealercardstop9.length)]
        dealercards.appendChild(dealer_card9)
        dealercardsNo += 1
        
        if (dealer_card9 == aced9) {
            if (dealer_card1 == aced || dealer_card2 == aced2 || dealer_card3 == aced3 || dealer_card4 == aced4 || dealer_card5 == aced5 || dealer_card6 == aced6 || dealer_card7 == aced7 || dealer_card8 == aced8) {
                adddealerscr += 1
            } else {
                if (nextdealerscr + 11 > 21) {
                    adddealerscr += 1
                } else {
                    adddealerscr += 11
                }
            }
        } else if (dealer_card9 == twod9) {
            adddealerscr += 2
        } else if (dealer_card9 == threed9) {
            adddealerscr += 3
        } else if (dealer_card9 == fourd9) {
            adddealerscr += 4
        } else if (dealer_card9 == fived9) {
            adddealerscr += 5
        } else if (dealer_card9 == sixd9) {
            adddealerscr += 6
        } else if (dealer_card9 == sevend9) {
            adddealerscr += 7
        } else if (dealer_card9 == eightd9) {
            adddealerscr += 8
        } else if (dealer_card9 == nined9) {
            adddealerscr += 9
        } else if (dealer_card9 == tend9 || jd9 || qd9 || kd9) {
            adddealerscr += 10
        }

        adddealerscore()

        if (nextdealerscr < 17) {
            setTimeout(anothercard8, 1000)
        } else if (nextdealerscr >= 17){
            if (nextplayerscr != 21) {
                winorloss()
            }
        }

        if (nextdealerscr > 16 && nextplayerscr == 21 && playercardsNo == 2) {
            if(nextdealerscr < 21) {
                document.getElementById("result").innerHTML = "Player BlackJack, You Win!"
            } else if (nextdealerscr == 21) {
                document.getElementById("result").innerHTML = "Push"
            } else if (nextdealerscr > 21) {
                document.getElementById("result").innerHTML = "Player BlackJack And Dealer Bust, You Win!"
            }
        }
    }
}

function anothercard8() {
    if (nextdealerscr < 17) {
        dealer_card10 = dealercardstop10[Math.floor(Math.random() * dealercardstop10.length)]
        dealercards.appendChild(dealer_card10)
        dealercardsNo += 1
        
        if (dealer_card10 == aced10) {
            if (dealer_card1 == aced || dealer_card2 == aced2 || dealer_card3 == aced3 || dealer_card4 == aced4 || dealer_card5 == aced5 || dealer_card6 == aced6 || dealer_card7 == aced7 || dealer_card8 == aced8 || dealer_card9 == aced9) {
                adddealerscr += 1
            } else {
                if (nextdealerscr + 11 > 21) {
                    adddealerscr += 1
                } else {
                    adddealerscr += 11
                }
            }
        } else if (dealer_card10 == twod10) {
            adddealerscr += 2
        } else if (dealer_card10 == threed10) {
            adddealerscr += 3
        } else if (dealer_card10 == fourd10) {
            adddealerscr += 4
        } else if (dealer_card10 == fived10) {
            adddealerscr += 5
        } else if (dealer_card10 == sixd10) {
            adddealerscr += 6
        } else if (dealer_card10 == sevend10) {
            adddealerscr += 7
        } else if (dealer_card10 == eightd10) {
            adddealerscr += 8
        } else if (dealer_card10 == nined10) {
            adddealerscr += 9
        } else if (dealer_card10 == tend10 || jd10 || qd10 || kd10) {
            adddealerscr += 10
        }

        adddealerscore()

        if (nextdealerscr < 17) {
            setTimeout(anothercard9, 1000)
        } else if (nextdealerscr >= 17){
            if (nextplayerscr != 21) {
                winorloss()
            }
        }

        if (nextdealerscr > 16 && nextplayerscr == 21 && playercardsNo == 2) {
            if(nextdealerscr < 21) {
                document.getElementById("result").innerHTML = "Player BlackJack, You Win!"
            } else if (nextdealerscr == 21) {
                document.getElementById("result").innerHTML = "Push"
            } else if (nextdealerscr > 21) {
                document.getElementById("result").innerHTML = "Player BlackJack And Dealer Bust, You Win!"
            }
        }
    }
}

function anothercard9() {
    if (nextdealerscr < 17) {
        dealer_card11 = dealercardstop11[Math.floor(Math.random() * dealercardstop11.length)]
        dealercards.appendChild(dealer_card11)
        dealercardsNo += 1
        
        if (dealer_card11 == aced11) {
            if (dealer_card1 == aced || dealer_card2 == aced2 || dealer_card3 == aced3 || dealer_card4 == aced4 || dealer_card5 == aced5 || dealer_card6 == aced6 || dealer_card7 == aced7 || dealer_card8 == aced8 || dealer_card9 == aced9 || dealer_card10 == aced10) {
                adddealerscr += 1
            } else {
                if (nextdealerscr + 11 > 21) {
                    adddealerscr += 1
                } else {
                    adddealerscr += 11
                }
            }
        } else if (dealer_card11 == twod11) {
            adddealerscr += 2
        } else if (dealer_card11 == threed11) {
            adddealerscr += 3
        } else if (dealer_card11 == fourd11) {
            adddealerscr += 4
        } else if (dealer_card11 == fived11) {
            adddealerscr += 5
        } else if (dealer_card11 == sixd11) {
            adddealerscr += 6
        } else if (dealer_card11 == sevend11) {
            adddealerscr += 7
        } else if (dealer_card11 == eightd11) {
            adddealerscr += 8
        } else if (dealer_card11 == nined11) {
            adddealerscr += 9
        } else if (dealer_card11 == tend11 || jd11 || qd11 || kd11) {
            adddealerscr += 10
        }

        adddealerscore()

        if (nextplayerscr != 21) {
            winorloss()
        }

        if (nextdealerscr > 16 && nextplayerscr == 21 && playercardsNo == 2) {
            if(nextdealerscr < 21) {
                document.getElementById("result").innerHTML = "Player BlackJack, You Win!"
            } else if (nextdealerscr == 21) {
                document.getElementById("result").innerHTML = "Push"
            } else if (nextdealerscr > 21) {
                document.getElementById("result").innerHTML = "Player BlackJack And Dealer Bust, You Win!"
            }
        }
    }
}

function stand() {
    stand = function() {}
    hit = function() {}
    dealercards.innerHTML = ""
    dealercards.appendChild(dealer_card1)

    if (dealercardsNo == 1) {
        dealercards.appendChild(dealer_card2)
        dealercardsNo += 1
        if (dealer_card2 == aced2) {
            if (dealer_card1 == ace) {
                adddealerscr += 1
            } else {
                adddealerscr += 11
            }
        } else if (dealer_card2 == twod2) {
            adddealerscr += 2
        } else if (dealer_card2 == threed2) {
            adddealerscr += 3
        } else if (dealer_card2 == fourd2) {
            adddealerscr += 4
        } else if (dealer_card2 == fived2) {
            adddealerscr += 5
        } else if (dealer_card2 == sixd2) {
            adddealerscr += 6
        } else if (dealer_card2 == sevend2) {
            adddealerscr += 7
        } else if (dealer_card2 == eightd2) {
            adddealerscr += 8
        } else if (dealer_card2 == nined2) {
            adddealerscr += 9
        } else if (dealer_card2 == tend2 || jd2 || qd2 || kd2) {
            adddealerscr += 10
        }
    
        adddealerscore()

        if (nextdealerscr < 17) {
            setTimeout(anothercard1, 1000)
        } else if (nextdealerscr >= 17){
            if (nextplayerscr != 21) {
                winorloss()
            }
        }
    }
}

function winorloss() {
    if (nextdealerscr > 21) {
        dealerresult = "Dealer Busted, You Win!"
        document.getElementById("result").innerHTML = dealerresult
    } else {
        decidewinner()
    }
}

function decidewinner() {
    if (nextplayerscr > nextdealerscr) {
        document.getElementById("result").innerHTML = "You Win!"
    } else if (nextplayerscr == nextdealerscr) {
        document.getElementById("result").innerHTML = "Push"
    } else if (nextdealerscr > nextplayerscr) {
        document.getElementById("result").innerHTML = "Dealer Wins"
    }
}