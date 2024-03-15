function timestampToSeconds(timestamp) {
  // Split the timestamp into its components
  const parts = timestamp.split(/[:,]/);

  // Extract hours, minutes, seconds, and milliseconds
  const hours = parseInt(parts[0]);
  const minutes = parseInt(parts[1]);
  const seconds = parseInt(parts[2]);
  const milliseconds = parseInt(parts[3]);

  // Convert to seconds
  const totalSeconds =
    hours * 3600 + minutes * 60 + seconds + milliseconds / 1000;

  return totalSeconds;
}

function parseSubtitles(subtitlesText) {
  const lines = subtitlesText.split("\n");
  const subtitles = [];

  let subtitleData = {};

  for (const line of lines) {
    if (line.trim().includes("-->")) {
      const [startTime, endTime] = line.split(" --> ");
      subtitleData.startTime = timestampToSeconds(startTime.trim());
      subtitleData.endTime = timestampToSeconds(endTime.trim());
    } else if (line.trim() !== "") {
      subtitleData.text = line.trim();
      if (subtitleData.startTime && subtitleData.endTime && subtitleData.text) {
        subtitles.push(subtitleData);
        subtitleData = {}; // Reset for the next subtitle
      }
    }
  }

  return subtitles;
}

const subtitlesText = `1
00:00:32,160 --> 00:00:34,860
Power over Spice...

2
00:00:35,060 --> 00:00:39,470
...is power over everything.

3
00:01:00,990 --> 00:01:04,860
*Subtitles By: Will1869, TearsHD, Bani, Snoopy*

4
00:01:04,880 --> 00:01:08,720
*Merged & retimed by Bani
for the clean COLLECTIVE release.*

5
00:01:20,490 --> 00:01:24,860
Imperial diary, year 10191, third comment.

6
00:01:28,330 --> 00:01:31,260
The battle for Arrakis took everyone by surprise.

7
00:01:32,590 --> 00:01:34,160
There were no witnesses.

8
00:01:35,660 --> 00:01:38,260
The Harkonnen operation was perpetrated

9
00:01:38,290 --> 00:01:42,630
overnight without warning or declaration of war.

10
00:01:45,230 --> 00:01:47,660
By morning, the Atreides were no more.

11
00:01:49,290 --> 00:01:50,630
All died in the dark.

12
00:01:59,630 --> 00:02:01,030
And the Emperor said...

13
00:02:04,930 --> 00:02:05,960
Nothing.

14
00:02:08,330 --> 00:02:10,490
Since that night my father has not been the same.

15
00:02:11,930 --> 00:02:13,330
Nor have I.

16
00:02:14,660 --> 00:02:17,030
His inaction is difficult for me to accept.

17
00:02:18,590 --> 00:02:21,590
For I know he loved Duke Leto Atreides, like a son

18
00:02:27,660 --> 00:02:29,660
But my father has always been guided by

19
00:02:29,660 --> 00:02:30,990
the calculus of power.

20
00:02:33,590 --> 00:02:35,190
This would not be the first time the

21
00:02:35,230 --> 00:02:36,730
Harkonnens have done his dirty work.

22
00:02:45,160 --> 00:02:46,190
In the shadows of

23
00:02:46,230 --> 00:02:47,590
Arrakis lie many secrets.

24
00:02:49,590 --> 00:02:52,360
But the darkest of them all may remain...

25
00:02:54,230 --> 00:02:55,890
The end of House Atreides.

26
00:03:02,180 --> 00:03:07,750
DUNE PART TWO

27
00:03:11,590 --> 00:03:12,430
Sister.

28
00:03:13,090 --> 00:03:14,630
Father is dead.

29
00:03:14,630 --> 00:03:18,330
Shouldn't you go back to the stars?

30
00:03:19,590 --> 00:03:20,590
Be with him.

31
00:03:22,890 --> 00:03:24,630
I'm afraid I won't have enough time to

32
00:03:24,630 --> 00:03:26,030
fix things before you're coming.

33
00:03:28,390 --> 00:03:31,090
This world is beyond cruelty.

34
00:04:07,610 --> 00:04:09,310
Enemy.

35
00:04:37,790 --> 00:04:38,860
Stay here.

36
00:04:51,630 --> 00:04:57,160
Okay.

37
00:05:06,830 --> 00:05:08,400
Down there on the right.

38
00:06:02,990 --> 00:06:05,860
They're close.

39
00:06:33,420 --> 00:06:34,490
Do you hear that?

40
00:06:37,160 --> 00:06:39,330
The rats are calling a worm.

41
00:06:45,830 --> 00:06:47,370
Worms!

42
00:06:47,600 --> 00:06:50,170
Unit, climb. Now!

43
00:07:42,120 --> 00:07:44,430
Look for wormsign.

44
00:07:57,310 --> 00:07:59,370
We're ok.

45
00:08:07,080 --> 00:08:07,920
Shields!

46
00:08:08,020 --> 00:08:08,480
No Shields!

47
00:09:10,140 --> 00:09:11,510
I got you, rat.

48
00:09:28,490 --> 00:09:31,090
Never stand with your back towards the opponent.

49
00:09:31,590 --> 00:09:32,830
How many times do I have to tell you that?

50
00:09:33,590 --> 00:09:34,690
You okay?

51
00:09:35,660 --> 00:09:35,930
No.

52
00:09:37,160 --> 00:09:37,560
How about her?

53
00:09:40,230 --> 00:09:40,560
She's fine.

54
00:09:47,590 --> 00:09:50,860
They do not usually venture this deep.

55
00:09:51,660 --> 00:09:53,430
They want to make sure no Atreides escaped.

56
00:09:53,960 --> 00:09:55,690
You think too much of yourself.

57
00:09:56,230 --> 00:09:57,830
No, no, we are in the deep desert.

58
00:09:58,830 --> 00:10:00,690
Only Fremen can survive here.

59
00:10:01,760 --> 00:10:04,130
They were here for us, not for you.

60
00:10:05,930 --> 00:10:06,630
Don't worry.

61
00:10:07,460 --> 00:10:10,360
I'm taking you somewhere
they will never find us.

62
00:10:27,890 --> 00:10:29,030
Filthy water.

63
00:10:29,290 --> 00:10:31,390
It's full of chemicals, but

64
00:10:31,430 --> 00:10:33,130
good enough for cooling system.

65
00:10:37,730 --> 00:10:38,730
Don't let it out.

66
00:10:40,590 --> 00:10:41,630
You okay?

67
00:10:43,290 --> 00:10:45,990
Don't let it out.

68
00:10:47,490 --> 00:10:49,030
I can't.

69
00:10:50,460 --> 00:10:51,630
I'm okay.

70
00:10:51,630 --> 00:10:52,660
Are you sure?

71
00:10:57,760 --> 00:10:58,760
You fought well.

72
00:10:59,990 --> 00:11:01,060
Once you woke up.

73
00:11:02,290 --> 00:11:03,290
I wasn't sleeping.

74
00:11:33,460 --> 00:11:35,460
No, no, no.

75
00:11:35,630 --> 00:11:37,560
I'll do it.

76
00:12:27,270 --> 00:12:31,610
ARRAKEEN capital of Northern Arrakis.

77
00:12:27,530 --> 00:12:31,860
ARRAKEEN capital of Northern Arrakis.

78
00:12:40,630 --> 00:12:41,960
Lord Raban.

79
00:12:43,060 --> 00:12:45,430
Now that the spice field are secured,

80
00:12:45,430 --> 00:12:47,360
I strongly recommend bringing all troops

81
00:12:47,390 --> 00:12:48,460
out of Fremen territories.

82
00:12:49,330 --> 00:12:50,860
We're losing too many men to the desert

83
00:12:51,230 --> 00:12:51,430
- Rats.

84
00:12:53,130 --> 00:12:53,830
- I beg your pardon?

85
00:12:54,160 --> 00:12:54,930
- We're losing them...

86
00:12:55,960 --> 00:12:56,330
To rats.

87
00:12:59,430 --> 00:13:00,590
Fremen.

88
00:13:00,590 --> 00:13:01,490
I can't confirm, my Lord.

89
00:13:01,530 --> 00:13:04,160
Communications are hectic in the open sands.

90
00:13:04,160 --> 00:13:04,590
- Your orders,

91
00:13:05,460 --> 00:13:06,660
were too control the whole the planet.

92
00:13:08,990 --> 00:13:09,360
- We have-

93
00:13:09,760 --> 00:13:10,960
- That's only half of it.

94
00:13:11,760 --> 00:13:15,690
As you may recall, the south is uninhabtable, my Lord

95
00:13:18,590 --> 00:13:20,260
May I suggest you get some rest?

96
00:13:20,990 --> 00:13:21,430
Rats!

97
00:13:23,230 --> 00:13:25,060
Kill them all!

98
00:13:25,660 --> 00:13:26,660
Kill them all!

99
00:13:27,260 --> 00:13:27,860
Rats!

100
00:14:15,590 --> 00:14:17,260
He's asking why we're so late.

101
00:14:21,390 --> 00:14:24,160
He thinks you're spies.

102
00:14:24,530 --> 00:14:26,590
You're not welcome here.

103
00:14:26,960 --> 00:14:27,360
He said...

104
00:14:27,480 --> 00:14:28,370
- I got that.

105
00:14:29,590 --> 00:14:29,760
Thanks.

106
00:14:30,390 --> 00:14:31,790
Stay close to me.

107
00:14:52,830 --> 00:14:54,130
Sietch Tabr

108
00:15:47,840 --> 00:15:49,810
Jamis! Jamis!

109
00:15:50,610 --> 00:15:52,180
You killed Jamis!

110
00:15:52,450 --> 00:15:53,480
Spies!

111
00:15:53,780 --> 00:15:55,180
Witch!

112
00:16:11,000 --> 00:16:12,670
Stop! Stop!

113
00:16:14,300 --> 00:16:16,940
They don't know what
they're saying.

114
00:16:17,440 --> 00:16:20,840
Lisan al-Gaib! Lisan al-Gaib!

115
00:16:23,140 --> 00:16:25,180
Mahdi!

116
00:16:32,420 --> 00:16:35,420
I need your guidance with the two foreigners.

117
00:16:36,720 --> 00:16:38,760
Give them back to the desert.

118
00:16:40,730 --> 00:16:42,760
I saw the signs.

119
00:16:43,030 --> 00:16:44,500
Again.

120
00:16:46,830 --> 00:16:49,900
Stilgar, your faith is playing tricks on you.

121
00:16:50,040 --> 00:16:53,410
The Lisan al-Gaib has not shown his face yet!

122
00:16:57,720 --> 00:17:02,050
He killed Jamis in a fair fight.

123
00:17:02,050 --> 00:17:05,290
He speaks our language.

124
00:17:05,620 --> 00:17:07,920
He will quickly learn our ways.

125
00:17:09,490 --> 00:17:13,690
I'm ready to pledge my life for him.

126
00:17:15,060 --> 00:17:18,330
The desert will handle his fate.

127
00:17:21,640 --> 00:17:24,270
What about the woman?

128
00:17:29,030 --> 00:17:31,730
- Looks like the Bene Gesserit's propaganda has taken root

129
00:17:34,690 --> 00:17:36,320
Some of them already think I'm their messiah.

130
00:17:38,630 --> 00:17:42,130
Others, false prophet.

131
00:17:43,290 --> 00:17:45,460
- I must sway the non-believers.

132
00:17:46,960 --> 00:17:47,990
If they follow me, we can

133
00:17:47,990 --> 00:17:49,060
disrupt spice production.

134
00:17:49,990 --> 00:17:51,430
That's the only way I can get to the emperor.

135
00:17:53,330 --> 00:17:54,890
- Your father didn't believe in revenge.

136
00:17:56,090 --> 00:17:56,960
- Yeah well, I do.

137
00:18:29,430 --> 00:18:31,260
- What is happening?

138
00:18:33,440 --> 00:18:35,440
Too spicy for the foreigner?

139
00:18:40,260 --> 00:18:41,360
- What is it?

140
00:18:42,160 --> 00:18:43,230
- There's spice in the food.

141
00:18:44,020 --> 00:18:46,220
He'll look pretty with blue eyes.

142
00:18:46,450 --> 00:18:48,360
Don't mock him.

143
00:18:49,720 --> 00:18:52,490
He deserves our respect. He's a good fighter.

144
00:18:55,560 --> 00:18:58,590
- Woman, come with me.

145
00:19:00,630 --> 00:19:03,400
To the well, our water we return.

146
00:19:03,940 --> 00:19:06,770
We bless our brother, Jamis.

147
00:20:09,590 --> 00:20:11,160
- 38 million decaliters.

148
00:20:12,590 --> 00:20:16,160
None of us, even dying of thirst

149
00:20:16,230 --> 00:20:18,160
would ever drink this water.

150
00:20:18,590 --> 00:20:21,330
This is sacred.

151
00:20:26,090 --> 00:20:27,160
- Genesis water.

152
00:20:28,830 --> 00:20:31,730
We have thousands of places.

153
00:20:33,260 --> 00:20:34,960
where we have enough water.

154
00:20:36,490 --> 00:20:38,890
The Lisan al-Gaib will

155
00:20:38,930 --> 00:20:41,190
Change the face of Arrakis

156
00:20:41,230 --> 00:20:43,930
He will bring back trees, he will bring back...

157
00:20:45,730 --> 00:20:46,790
a green paradise.

158
00:20:49,930 --> 00:20:51,330
So many souls

159
00:21:01,290 --> 00:21:03,230
Never give your water away,

160
00:21:03,260 --> 00:21:04,830
not even for the dead.

161
00:21:08,290 --> 00:21:09,660
Why are you showing me this?

162
00:21:10,160 --> 00:21:11,490
- Because you are Bene Gesserit

163
00:21:11,490 --> 00:21:13,760
Because you understand the prophecies.

164
00:21:15,760 --> 00:21:16,930
The mother of the Lisan al-Gaib

165
00:21:16,930 --> 00:21:18,860
will be a Reverend mother.

166
00:21:20,660 --> 00:21:22,690
Our Reverend Mother is dying.

167
00:21:24,160 --> 00:21:26,190
You want me to take her place?

168
00:21:26,430 --> 00:21:27,590
- Yes,

169
00:21:29,090 --> 00:21:29,590
I do.

170
00:21:31,060 --> 00:21:33,630
Do you believe in Paul?

171
00:21:35,760 --> 00:21:37,490
There are signs.

172
00:21:39,430 --> 00:21:39,660
Yes.

173
00:21:41,230 --> 00:21:43,930
- What if I would refuse?

174
00:21:44,760 --> 00:21:46,430
- Then he is not Lisan al-Gaib,

175
00:21:47,430 --> 00:21:49,160
And you have no purpose to serve.

176
00:21:49,490 --> 00:21:50,990
What else is left to do then?

177
00:21:51,230 --> 00:21:53,330
But return your water to the well?

178
00:21:58,290 --> 00:21:59,890
It's an honor, isn't it?

179
00:22:01,490 --> 00:22:02,660
I think you should feel honored.

180
00:22:03,090 --> 00:22:05,330
- It was a choice between this or death,

181
00:22:05,330 --> 00:22:07,190
so forgive me if I'm not flattered.

182
00:22:08,490 --> 00:22:10,560
- How does one become a Reverend Mother?

183
00:22:11,130 --> 00:22:12,730
- It's different from one culture to another.

184
00:22:12,990 --> 00:22:14,560
Here on Arrakis, I have no idea.

185
00:22:18,130 --> 00:22:19,730
You're afraid.

186
00:22:21,460 --> 00:22:22,560
- A Reverend Mother has the task

187
00:22:22,590 --> 00:22:23,490
of holding the memories

188
00:22:23,490 --> 00:22:25,330
of all the Reverend Mothers
that came before them,

189
00:22:25,330 --> 00:22:28,060
so I'll be given centuries
of pain and sorrow.

190
00:22:28,590 --> 00:22:29,830
- Is it dangerous?

191
00:22:30,960 --> 00:22:32,230
- It's lethal for men.

192
00:22:33,560 --> 00:22:34,090
That's for sure.

193
00:23:42,960 --> 00:23:44,390
What are you guys laughing about?

194
00:23:45,130 --> 00:23:45,960
- Don't bother.

195
00:23:50,890 --> 00:23:52,660
- You don't believe in all this?

196
00:23:53,060 --> 00:23:54,660
- No, we don't.

197
00:23:54,660 --> 00:23:55,730
- These are all Southern beliefs.

198
00:23:56,590 --> 00:23:57,160
- Southern beliefs?

199
00:23:57,930 --> 00:23:59,530
- Southern tribes believe that a Messiah

200
00:23:59,560 --> 00:24:00,990
will come to deliver us from evil.

201
00:24:01,760 --> 00:24:03,790
- You don't believe in the Lisan al-Gaib?

202
00:24:04,130 --> 00:24:07,060
- We believe in Fremen

203
00:24:06,840 --> 00:24:08,580
Amen.

204
00:24:08,830 --> 00:24:10,460
- You want to control people?

205
00:24:10,460 --> 00:24:11,860
You tell them a Messiah will come.

206
00:24:12,560 --> 00:24:14,630
Then they'll wait, for centuries.

207
00:24:18,730 --> 00:24:21,330
- Now, we must pray.

208
00:24:28,990 --> 00:24:30,360
- What about him?

209
00:24:30,490 --> 00:24:31,530
- Stilgar?

210
00:24:31,630 --> 00:24:32,690
- He's from the South.

211
00:24:33,490 --> 00:24:34,560
You didn't notice his accent.

212
00:24:44,260 --> 00:24:45,430
What'll happen to my mother?

213
00:24:45,850 --> 00:24:47,950
She'll drink worm piss.

214
00:24:48,150 --> 00:24:49,350
Not funny.

215
00:24:49,520 --> 00:24:51,020
He's about to lose her.

216
00:24:51,280 --> 00:24:53,950
If she's stupid enough to
drink poison.

217
00:24:55,560 --> 00:24:57,190
Stop it!

218
00:24:57,360 --> 00:24:59,830
We are praying.

219
00:25:21,210 --> 00:25:24,480
Here is the Water of Life.

220
00:25:24,990 --> 00:25:27,420
It frees the soul.

221
00:25:27,720 --> 00:25:29,790
If you drink

222
00:25:30,060 --> 00:25:32,190
you shall die.

223
00:25:35,960 --> 00:25:37,630
If you drink

224
00:25:39,030 --> 00:25:40,770
you may see.

225
00:25:40,830 --> 00:25:42,370
Drink!

226
00:27:06,350 --> 00:27:08,390
What have we done.

227
00:27:09,490 --> 00:27:11,060
She is pregnant.

228
00:27:25,240 --> 00:27:26,470
That was no miracle!

229
00:27:26,710 --> 00:27:28,440
You saw it with your own eyes!

230
00:27:30,280 --> 00:27:32,750
The Mother of the Lisan al-Gaib

231
00:27:33,010 --> 00:27:34,710
shall survive the Holy Poison

232
00:27:34,850 --> 00:27:36,250
and She did.

233
00:27:36,550 --> 00:27:37,980
As it's written!

234
00:27:39,850 --> 00:27:41,890
Your people wrote that!

235
00:27:42,060 --> 00:27:43,790
Blasphemy.

236
00:27:44,020 --> 00:27:45,530
The prophecy has been accomplished.

237
00:27:46,330 --> 00:27:48,330
The Mahdi must be Fremen!

238
00:27:52,300 --> 00:27:54,830
Arrakis must be freed by its own people!

239
00:27:55,760 --> 00:27:57,160
She's right.

240
00:27:59,120 --> 00:28:00,280
- It's no miracle.

241
00:28:01,800 --> 00:28:03,670
My mother was trained to do that.

242
00:28:04,700 --> 00:28:05,900
Poison transmutation is something

243
00:28:05,970 --> 00:28:07,900
advanced Bene Gesserit can do.

244
00:28:11,030 --> 00:28:11,900
I'm not the Mahdi.

245
00:28:16,000 --> 00:28:16,830
I'm not here to lead.

246
00:28:19,890 --> 00:28:22,360
I'm here to learn your ways.

247
00:28:22,800 --> 00:28:24,500
I'm here to fight beside you.

248
00:28:25,630 --> 00:28:26,400
That's all I'm asking.

249
00:28:34,710 --> 00:28:39,350
The Mahdi is too humble to say He is the Mahdi.

250
00:28:40,050 --> 00:28:42,620
Even more reason to know He is!

251
00:28:43,020 --> 00:28:46,420
As written!

252
00:28:53,970 --> 00:28:54,730
How is she?

253
00:28:56,730 --> 00:29:00,230
- She was frightened but she's okay.

254
00:29:11,470 --> 00:29:12,730
She talks to me.

255
00:29:16,200 --> 00:29:17,630
She believes in you.

256
00:29:21,500 --> 00:29:22,000
She says

257
00:29:25,230 --> 00:29:28,430
Kwisatz Haderach show us the way.

258
00:29:30,200 --> 00:29:31,400
You're so close now.

259
00:29:31,400 --> 00:29:33,900
Only one step remains.

260
00:29:33,900 --> 00:29:35,300
you will become the Kwisatz Haderach.

261
00:29:39,000 --> 00:29:39,770
Only one step remains.

262
00:29:39,800 --> 00:29:41,070
You must do what I did.

263
00:29:41,070 --> 00:29:43,430
You must drink the water of life.

264
00:29:44,900 --> 00:29:48,470
Your mind is gonna open and you will see.

265
00:29:49,950 --> 00:29:51,620
You will see!

266
00:29:51,890 --> 00:29:54,950
The beauty and the horror!

267
00:30:00,200 --> 00:30:01,600
- If you want to fight with us,

268
00:30:01,630 --> 00:30:03,170
first thing you must learn

269
00:30:03,170 --> 00:30:06,070
to be one with the desert.

270
00:30:07,970 --> 00:30:11,470
So here is a tent and enough food.

271
00:30:11,470 --> 00:30:16,000
I want you to cross that small erg and come back.

272
00:30:16,970 --> 00:30:17,530
Come by night.

273
00:30:18,500 --> 00:30:20,200
You know how to use a paracompass.

274
00:30:20,200 --> 00:30:20,430
- Yes.

275
00:30:21,870 --> 00:30:25,370
Anything else I should know?

276
00:30:25,700 --> 00:30:28,600
- Beside the worms and the Harkonnens,

277
00:30:28,630 --> 00:30:30,470
beware of the trap door spiders.

278
00:30:32,030 --> 00:30:33,970
Centipedes are very nasty.

279
00:30:34,230 --> 00:30:35,130
Not the big ones.

280
00:30:35,870 --> 00:30:36,400
They are harmless.

281
00:30:37,200 --> 00:30:40,070
But the little ones
you have to worry about.

282
00:30:41,500 --> 00:30:46,700
Don't ever, ever listen to the Djinn.

283
00:30:49,200 --> 00:30:49,800
- The Djinn.

284
00:30:50,370 --> 00:30:52,400
- Djinn, desert spirits.

285
00:30:53,830 --> 00:30:56,670
They whisper at night.

286
00:31:00,530 --> 00:31:03,270
They can possess you.

287
00:31:04,330 --> 00:31:05,500
Really, be careful.

288
00:31:06,570 --> 00:31:07,430
They are demons.

289
00:31:11,230 --> 00:31:12,070
But it's true.

290
00:31:12,070 --> 00:31:12,930
Do listen to them.

291
00:31:16,940 --> 00:31:19,040
He doesn't know how to cross.

292
00:31:19,310 --> 00:31:21,840
Stilgar is going to get him killed.

293
00:31:22,310 --> 00:31:24,210
What is he trying to prove?

294
00:31:24,440 --> 00:31:26,480
What do you think?

295
00:31:27,250 --> 00:31:30,520
"The Prophet shall know the ways of the desert."

296
00:31:37,660 --> 00:31:39,760
I think it's for the best.

297
00:31:42,030 --> 00:31:43,100
What's this?

298
00:31:44,130 --> 00:31:46,570
You care for him now?

299
00:31:47,170 --> 00:31:49,800
He's not like the other strangers.

300
00:31:50,300 --> 00:31:52,340
He's sincere.

301
00:32:38,830 --> 00:32:40,570
- Jamis

302
00:32:43,130 --> 00:32:45,130
- You sand walk like a drunk lizard.

303
00:32:47,580 --> 00:32:49,300
- Yeah, I'm doing pretty good so far.

304
00:32:49,340 --> 00:32:51,480
- We're not even in worm territory yet.

305
00:33:10,800 --> 00:33:12,300
You have to break up your rhythm.

306
00:33:15,970 --> 00:33:17,570
Like this.

307
00:33:18,930 --> 00:33:20,700
- Now that's interesting because in the film books

308
00:33:20,730 --> 00:33:23,000
I've studied, the anthropologists say in order

309
00:33:23,030 --> 00:33:24,970
to properly sand walk, you actually have to.

310
00:33:28,570 --> 00:33:29,330
Nevermind.

311
00:33:29,370 --> 00:33:30,770
Please keep going.

312
00:33:58,270 --> 00:33:59,930
- You know, I'm the only one who believes

313
00:34:00,930 --> 00:34:02,100
you're gonna make it until summer.

314
00:34:06,570 --> 00:34:08,000
If you wanna follow us in the desert,

315
00:34:08,030 --> 00:34:09,370
you need to know how wind traps work.

316
00:34:09,630 --> 00:34:10,530
So listen to me.

317
00:34:10,570 --> 00:34:11,130
It's always neat to me.

318
00:34:11,130 --> 00:34:13,130
They're simple, but they require constant attention.

319
00:34:26,370 --> 00:34:27,070
What?

320
00:34:32,270 --> 00:34:33,500
Stop looking at me like that.

321
00:34:45,530 --> 00:34:46,930
- You're right.

322
00:34:47,400 --> 00:34:50,130
If we want to protect your brother,

323
00:34:50,130 --> 00:34:52,530
we need all the Fremen to believe in the prophecy.

324
00:34:57,870 --> 00:35:02,200
We must convert the non-believers one by one.

325
00:35:04,300 --> 00:35:06,530
We need to start with the weaker ones.

326
00:35:08,030 --> 00:35:09,800
the vulnerable ones.

327
00:35:11,400 --> 00:35:14,100
The ones that fear us.

328
00:38:39,840 --> 00:38:41,010
- Chani!

329
00:38:45,830 --> 00:38:46,870
- Reload.

330
00:39:02,040 --> 00:39:03,120
- Reload.

331
00:39:21,160 --> 00:39:23,400
The shield. They only open when they're firing.

332
00:39:23,400 --> 00:39:24,000
- I know that.

333
00:39:24,030 --> 00:39:24,960
What do you think I'm trying to do?

334
00:39:25,360 --> 00:39:25,860
- I'm triggering.

335
00:39:26,300 --> 00:39:26,800
On my signal.

336
00:39:27,460 --> 00:39:27,730
Be ready.

337
00:39:55,130 --> 00:39:56,030
- Oh shit.

338
00:40:43,700 --> 00:40:46,070
You saw what he did.

339
00:40:46,470 --> 00:40:48,210
He saw it coming

340
00:40:48,710 --> 00:40:50,410
and he saved her life.

341
00:40:51,210 --> 00:40:52,880
He saw it.

342
00:40:53,580 --> 00:40:54,750
He can foresee.

343
00:40:57,850 --> 00:40:59,220
Muad'Dib likes his smell.

344
00:41:05,930 --> 00:41:07,530
- Who taught you to fight like that?

345
00:41:07,660 --> 00:41:08,360
- My old masters.

346
00:41:09,600 --> 00:41:10,880
And they were close friends.

347
00:41:14,000 --> 00:41:16,860
They were a massacred.
Alongside my father.

348
00:41:22,640 --> 00:41:24,450
You've been fighting The Harkonnens for decades.

349
00:41:25,800 --> 00:41:27,830
My family has been fighting them for centuries.

350
00:41:28,500 --> 00:41:29,700
I know everything about them,

351
00:41:29,680 --> 00:41:32,030
Their habits, their ways of thinking.

352
00:41:33,370 --> 00:41:34,560
You know everything about the desert.

353
00:41:34,940 --> 00:41:36,700
You harness the very power of it.

354
00:41:38,600 --> 00:41:40,600
We can stop them together.

355
00:41:40,600 --> 00:41:42,460
Bury them in the sand where they belong.

356
00:41:43,400 --> 00:41:45,760
So that this planet can be yours once more.

357
00:41:46,530 --> 00:41:48,060
- What will you have us do?

358
00:41:49,030 --> 00:41:51,130
What would you do, Stilgar?

359
00:41:51,530 --> 00:41:55,760
I would strike even further north.

360
00:41:55,800 --> 00:41:56,860
Then I will go further north.

361
00:41:57,360 --> 00:41:58,360
- The further north you go,

362
00:41:58,440 --> 00:41:59,730
the more likely it is you die.

363
00:42:00,510 --> 00:42:01,880
Then I'll die

364
00:42:02,280 --> 00:42:03,520
maybe you will too.

365
00:42:04,880 --> 00:42:07,550
But the others will keep going.

366
00:42:08,690 --> 00:42:11,560
And they won't stop until the Fremen are free.

367
00:42:15,830 --> 00:42:17,530
He deserves to be Fedaykin.

368
00:42:19,200 --> 00:42:21,070
He needs names, Stilgar.

369
00:42:21,470 --> 00:42:22,540
He does!

370
00:42:24,300 --> 00:42:27,360
I see strength in you.

371
00:42:27,870 --> 00:42:29,340
Like Usul.

372
00:42:29,640 --> 00:42:32,080
The base of the pillar.

373
00:42:33,100 --> 00:42:35,100
Come, come.

374
00:42:44,500 --> 00:42:50,100
- You shall be known among us as Usul.

375
00:42:51,330 --> 00:42:52,200
- Usul.

376
00:42:53,130 --> 00:42:56,000
- And now a Fedaykin is a fighter.

377
00:42:56,000 --> 00:42:58,530
and needs a war name.

378
00:42:58,530 --> 00:42:59,530
You must choose.

379
00:43:02,560 --> 00:43:09,330
- How do you call the small desert mouse again?

380
00:43:11,060 --> 00:43:12,260
- Muad'Dib.

381
00:43:12,800 --> 00:43:14,030
- No, no, no.

382
00:43:14,030 --> 00:43:15,560
Oh no, Muad'Dib is wise.

383
00:43:15,560 --> 00:43:18,560
Muad'dib is wise in the ways of the desert.

384
00:43:18,560 --> 00:43:23,630
Muad'Dib creates his own water.

385
00:43:24,500 --> 00:43:25,860
The constellation that points to the North

386
00:43:25,860 --> 00:43:27,360
we call Muad'Dib.

387
00:43:27,360 --> 00:43:29,900
The one who points the way.

388
00:43:31,730 --> 00:43:33,260
That is powerful name.

389
00:43:38,060 --> 00:43:40,260
Now you are our brother.

390
00:43:42,160 --> 00:43:45,160
Paul Muad'Dib Usul.

391
00:44:25,000 --> 00:44:28,600
Hey! Stilgar!

392
00:44:42,440 --> 00:44:44,080
Father, I found my way.

393
00:45:01,400 --> 00:45:05,180
It's breathtaking.

394
00:45:14,360 --> 00:45:15,960
Look, right there's spice

395
00:45:18,000 --> 00:45:20,860
Arrakis is so beautiful when the sun is low.

396
00:45:27,900 --> 00:45:29,530
Where you're from...

397
00:45:31,100 --> 00:45:32,760
- Does water really fall from the sky?

398
00:45:33,360 --> 00:45:34,100
- Oh, yes.

399
00:45:35,000 --> 00:45:37,730
Sometimes it rains for a weeks, in Caladan

400
00:45:38,730 --> 00:45:40,900
Where you see sand here, imagine water.

401
00:45:44,530 --> 00:45:47,130
Our castle stands on cliffs, over the sea.

402
00:45:48,500 --> 00:45:50,260
If you dive in, you can't reach the bottom.

403
00:45:51,160 --> 00:45:52,500
- You dive in?

404
00:45:52,500 --> 00:45:52,760
- Yes.

405
00:45:53,560 --> 00:45:54,130
It's called swimming.

406
00:45:55,500 --> 00:45:58,300
I don't believe you, Usul.

407
00:45:58,360 --> 00:45:59,500
- Usul.

408
00:46:01,160 --> 00:46:04,100
- What's your secret name?

409
00:46:05,900 --> 00:46:08,100
- Sihaya.

410
00:46:09,600 --> 00:46:11,260
What does that mean?

411
00:46:12,230 --> 00:46:13,260
- It means desert spring.

412
00:46:14,060 --> 00:46:14,900
- Desert spring.

413
00:46:17,160 --> 00:46:17,530
I love it.

414
00:46:18,000 --> 00:46:19,230
- I hate it.

415
00:46:19,900 --> 00:46:22,160
It's from some stupid prophecy.

416
00:46:22,860 --> 00:46:23,560
I prefer Chani.

417
00:46:24,430 --> 00:46:26,160
- I prefer Chani too, then.

418
00:46:32,100 --> 00:46:34,760
- Do you think Stilgar will teach me?

419
00:46:35,500 --> 00:46:35,930
- To ride?

420
00:46:36,400 --> 00:46:37,630
- Yeah.

421
00:46:38,430 --> 00:46:40,830
- No, only Fremen ride worms.

422
00:46:40,860 --> 00:46:42,400
- I've become one, didn't I?

423
00:46:42,400 --> 00:46:43,960
- By name, not by blood.

424
00:46:46,260 --> 00:46:50,930
Your blood comes from dukes, great houses.

425
00:46:53,030 --> 00:46:54,300
We don't have that here.

426
00:46:55,560 --> 00:46:59,430
Here, we're equal, men and women alike.

427
00:46:59,760 --> 00:47:01,210
We do for the benefit of all.

428
00:47:01,220 --> 00:47:04,360
- But I'd very much like to be equal to you.

429
00:47:11,930 --> 00:47:13,960
- Paul Muad'Dib Usul.

430
00:47:16,000 --> 00:47:18,730
Maybe you could be Fremen.

431
00:47:21,100 --> 00:47:22,700
Maybe I'll show you the way.

432
00:48:52,830 --> 00:48:53,060
- Raban.

433
00:49:02,460 --> 00:49:06,160
- Fremen attacks on your watch.

434
00:49:06,200 --> 00:49:10,460
Your orders were to restore spice production

435
00:49:10,480 --> 00:49:12,600
To full capacity.

436
00:49:13,130 --> 00:49:15,700
Do you know what it means if you fail?

437
00:49:17,040 --> 00:49:20,830
The Emperor will take spice out of our control.

438
00:49:22,100 --> 00:49:23,430
Tighten your grip, Raban.

439
00:49:23,730 --> 00:49:25,130
- Uncle.

440
00:49:25,600 --> 00:49:27,800
- Or feel mine on your neck.

441
00:49:42,930 --> 00:49:45,160
- Usul.

442
00:49:46,260 --> 00:49:48,630
It's okay.

443
00:49:51,060 --> 00:49:52,500
- Hey.

444
00:49:56,230 --> 00:49:57,460
I'm here, I'm here.

445
00:49:58,900 --> 00:50:00,400
It's been a while since

446
00:50:00,400 --> 00:50:01,830
you've had one of those nightmares.

447
00:50:07,330 --> 00:50:09,060
Tell me, what was it about?

448
00:50:14,830 --> 00:50:16,700
- Nothing's clear.

449
00:50:17,460 --> 00:50:18,300
It's only fragments.

450
00:50:20,500 --> 00:50:21,500
I'm in the south,

451
00:50:22,720 --> 00:50:24,370
and I'm following someone

452
00:50:25,500 --> 00:50:27,860
And it triggers a holy war.

453
00:50:31,760 --> 00:50:35,330
Millions and millions of people starving to death

454
00:50:35,630 --> 00:50:37,830
because of me.

455
00:50:43,260 --> 00:50:46,660
- You've been exposed to spice for a long time.

456
00:50:46,800 --> 00:50:48,060
It can create weird dreams.

457
00:50:55,530 --> 00:50:56,560
- It's a big day.

458
00:50:58,460 --> 00:51:00,600
We can ask Stilgar to call it off.

459
00:51:00,620 --> 00:51:01,220
- No

460
00:51:02,440 --> 00:51:03,240
I'm fine

461
00:51:19,200 --> 00:51:20,100
- Usul.

462
00:51:22,900 --> 00:51:26,160
I done it myself.

463
00:51:26,660 --> 00:51:27,340
Here.

464
00:51:27,380 --> 00:51:27,980
- Thanks.

465
00:51:30,540 --> 00:51:32,460
- Don't try to impress anyone.

466
00:51:32,630 --> 00:51:33,160
You're brave.

467
00:51:33,460 --> 00:51:34,460
We all know that.

468
00:51:36,400 --> 00:51:37,830
Be simple.

469
00:51:38,400 --> 00:51:39,600
Be direct.

470
00:51:40,020 --> 00:51:41,220
Nothing fancy.

471
00:51:41,240 --> 00:51:41,980
- Nothing fancy

472
00:51:42,010 --> 00:51:43,360
- Hey, I'm serious.

473
00:51:43,380 --> 00:51:44,410
Nothing fancy

474
00:51:44,410 --> 00:51:45,810
or you will shame my teaching

475
00:51:45,820 --> 00:51:46,700
- I won't shame you.

476
00:51:47,360 --> 00:51:47,960
I understand.

477
00:51:50,560 --> 00:51:52,730
- Shai Hulu decides today if you become Fremen.

478
00:51:53,700 --> 00:51:54,300
Or if you die.

479
00:52:02,870 --> 00:52:03,570
Hey, Muad'Dib!

480
00:52:04,280 --> 00:52:05,780
Don't embarrass us!

481
00:52:06,220 --> 00:52:07,790
Call a big one!

482
00:52:13,690 --> 00:52:15,460
Stilgar taught him well.

483
00:52:19,800 --> 00:52:21,830
Enough joking.

484
00:52:22,000 --> 00:52:23,440
This is the final test.

485
00:54:14,710 --> 00:54:16,920
Whoa! Not that big.

486
00:57:41,620 --> 00:57:43,320
As written.

487
00:58:23,600 --> 00:58:25,700
Reverend Mother!

488
00:58:29,200 --> 00:58:32,870
Muad'Dib made peace with Shai-Hulud.

489
00:58:36,110 --> 00:58:37,340
He called a grandfather worm,

490
00:58:37,680 --> 00:58:40,810
the biggest ever seen.

491
00:58:41,610 --> 00:58:42,980
As written!

492
00:58:43,150 --> 00:58:46,820
Shai-Hulud shall bow to the Boy from the Outer World.

493
00:58:46,850 --> 00:58:49,150
Bless the Maker and His works.

494
00:58:49,920 --> 00:58:53,990
Will not Shai-Hulud know the Mahdi when He comes?

495
00:58:58,660 --> 00:59:00,630
Then share the Word.

496
00:59:16,100 --> 00:59:18,200
- I know they do.

497
00:59:20,260 --> 00:59:22,700
Our task in the north is nearly done.

498
00:59:22,760 --> 00:59:24,900
They believe in Paul.

499
00:59:25,960 --> 00:59:27,600
Now we go South.

500
00:59:27,600 --> 00:59:30,500
There are millions of fundamentalists there.

501
00:59:31,540 --> 00:59:34,730
They will protect him when he comes.

502
00:59:36,500 --> 00:59:38,440
The Kwisat Haderach...

503
00:59:38,520 --> 00:59:40,760
will be born in the south.

504
00:59:49,950 --> 00:59:52,380
Will you always be with me?

505
00:59:54,600 --> 00:59:56,160
- As long as I breathe.

506
01:00:00,800 --> 01:00:01,540
What's wrong?

507
01:00:08,030 --> 01:00:08,430
- Chani?

508
01:00:09,030 --> 01:00:10,200
- There will be trouble.

509
01:00:11,570 --> 01:00:13,800
- What are you talking about?

510
01:00:18,200 --> 01:00:19,230
Chani, what do you mean?

511
01:00:19,670 --> 01:00:21,370
- The way they're looking at you.

512
01:00:22,200 --> 01:00:23,300
They're worshiping you now.

513
01:00:26,500 --> 01:00:28,070
The Feydaykins are counting your victories,

514
01:00:29,070 --> 01:00:30,400
They say you can see the future.

515
01:00:31,540 --> 01:00:33,540
...must be Lisan al-Gaib

516
01:00:34,870 --> 01:00:35,670
- I'm no Messiah.

517
01:00:39,170 --> 01:00:41,270
I'm a Feydaykin of Sietch Taybr.

518
01:00:41,930 --> 01:00:44,430
- Yet we have a Bene Gesserit among us,

519
01:00:45,200 --> 01:00:46,530
fanning the flames of your legend,

520
01:00:46,770 --> 01:00:47,470
saying you're the one.

521
01:01:10,630 --> 01:01:12,300
Reverend Mother!

522
01:01:12,660 --> 01:01:14,770
Your palanquin is ready!

523
01:01:15,770 --> 01:01:17,530
- She says you should be coming with us.

524
01:01:18,530 --> 01:01:19,570
- You know I can't.

525
01:01:20,500 --> 01:01:21,670
- She's asking why.

526
01:01:22,370 --> 01:01:24,200
- Because I must continue
fighting in the north

527
01:01:24,200 --> 01:01:25,800
to protect you down there in the south.

528
01:01:28,330 --> 01:01:30,370
- She says she can tell when you lie.

529
01:01:31,730 --> 01:01:33,270
- Tell her that's because our mother

530
01:01:33,270 --> 01:01:35,170
keeps spreading dangerous tales.

531
01:01:43,230 --> 01:01:44,100
What is she saying now?

532
01:01:44,270 --> 01:01:46,130
- She says you're blinded by love,

533
01:01:46,130 --> 01:01:47,530
And she reminds you that

534
01:01:47,530 --> 01:01:48,600
you must reserve your hand

535
01:01:48,630 --> 01:01:49,970
for the most strategic alliance.

536
01:01:53,870 --> 01:01:54,770
She's also wondering why you don't believe

537
01:01:54,830 --> 01:01:56,100
in who you are.

538
01:01:56,220 --> 01:01:56,780
- I do believe.

539
01:01:57,620 --> 01:01:59,050
I believe I matter to these people.

540
01:02:01,050 --> 01:02:02,950
I believe I'm making a difference in this war.

541
01:02:05,150 --> 01:02:06,480
We're nearly at the gates of the city.

542
01:02:06,880 --> 01:02:08,150
- That's not what she means.

543
01:02:08,420 --> 01:02:09,250
- I know what she means.

544
01:02:09,720 --> 01:02:10,950
- Do you not think I also

545
01:02:10,980 --> 01:02:12,180
feel the weight of the prophecy?

546
01:02:12,380 --> 01:02:13,080
- It's not a prophecy.

547
01:02:14,380 --> 01:02:16,120
It's a story that you keep telling,

548
01:02:16,150 --> 01:02:17,480
but it's not their story, it's yours.

549
01:02:18,350 --> 01:02:20,050
They deserve to be led by one of their own.

550
01:02:21,680 --> 01:02:22,680
- What your people did to

551
01:02:22,680 --> 01:02:23,780
this world is heartbreaking.

552
01:02:24,080 --> 01:02:25,950
- We gave them something to hope for.

553
01:02:25,980 --> 01:02:26,850
- That's not hope!

554
01:02:30,520 --> 01:02:33,380
- They're coming.

555
01:02:33,240 --> 01:02:35,810
Reverend Mother, we have to go!

556
01:02:36,720 --> 01:02:43,080
- I'll be waiting for you.

557
01:02:46,060 --> 01:02:46,520
All of us.

558
01:03:28,620 --> 01:03:30,940
- Those storms look bad!

559
01:03:32,100 --> 01:03:34,210
They're the Guardians of the South.

560
01:03:34,570 --> 01:03:36,240
It's a hard crossing

561
01:03:36,570 --> 01:03:38,580
but Shai-Hulud is strong.

562
01:03:56,490 --> 01:04:02,500
SPICE DEPOT Arrakeen.

563
01:04:18,450 --> 01:04:19,420
- How much?!

564
01:04:19,400 --> 01:04:21,940
- [inaudible] 80% of our last crop!

565
01:04:22,530 --> 01:04:24,500
[inaudible]

566
01:04:24,500 --> 01:04:26,620
You shouldn't have leaved the security perimeter!

567
01:04:26,620 --> 01:04:27,570
- Security perimeter?!

568
01:04:27,570 --> 01:04:29,520
The rats are already inside the perimeter!

569
01:04:29,520 --> 01:04:31,160
- The Fremen demon might be with them!

570
01:04:31,160 --> 01:04:32,210
- Hope so!

571
01:04:32,210 --> 01:04:33,580
- We're tracking them, my lord.

572
01:04:34,850 --> 01:04:37,250
- Today, Muad'Dib dies!

573
01:04:42,810 --> 01:04:44,810
The rats are traveling fast.

574
01:04:45,940 --> 01:04:47,950
Move!

575
01:07:15,320 --> 01:07:16,350
- Muad'Dib!

576
01:07:17,880 --> 01:07:18,620
Show yourself!

577
01:08:48,220 --> 01:08:49,020
- For Muad'Dib!

578
01:09:02,470 --> 01:09:03,370
Muad'Dib

579
01:09:05,600 --> 01:09:07,400
Some new Fremen prophet.

580
01:09:09,830 --> 01:09:12,030
- It's not the first time we've had frictions with the Fremen.

581
01:09:13,300 --> 01:09:14,470
- Not of this magnitude.

582
01:09:19,170 --> 01:09:20,500
So, my dear daughter,

583
01:09:22,130 --> 01:09:23,830
how would you deal with this prophet?

584
01:09:29,980 --> 01:09:33,200
- If this Muad'Dib is a religious figure,

585
01:09:34,520 --> 01:09:36,140
You can't use direct force.

586
01:09:38,040 --> 01:09:40,460
Repression only makes a religion flourish.

587
01:09:41,430 --> 01:09:43,170
You'll only end up humiliating yourself.

588
01:09:43,870 --> 01:09:45,400
- You underestimate my Sardaukhars.

589
01:09:45,400 --> 01:09:47,600
- You underestimate the power of faith.

590
01:09:51,100 --> 01:09:53,370
- Her Highness proves once again

591
01:09:53,400 --> 01:09:55,430
that she was my most acute student.

592
01:09:58,130 --> 01:09:58,970
- Then send assassins.

593
01:09:59,630 --> 01:10:02,500
- No, prophets get stronger when they die.

594
01:10:04,730 --> 01:10:05,470
Let the conflict on.

595
01:10:05,470 --> 01:10:06,700
Arrakis turn into war.

596
01:10:07,270 --> 01:10:10,130
You'll then bring peace, as a Savior

597
01:10:13,070 --> 01:10:14,570
- You'd be a formidable Empress

598
01:10:17,300 --> 01:10:21,370
- Muad'Dib. The prophet.

599
01:10:21,830 --> 01:10:23,000
The one who points the way.

600
01:10:24,170 --> 01:10:26,000
These are our own religious patterns, aren't they?

601
01:10:26,800 --> 01:10:27,530
This is our doing.

602
01:10:31,300 --> 01:10:34,000
Muad'Dib. Means kangaroo mouse,

603
01:10:34,900 --> 01:10:36,300
An unusual war name for a Fremen.

604
01:10:38,520 --> 01:10:40,440
- What if Paul Atreides were still alive.

605
01:10:40,440 --> 01:10:43,530
- Enough, this must not come out.

606
01:10:43,830 --> 01:10:45,730
Even to your father's ears, understand?

607
01:10:47,070 --> 01:10:47,800
- I do Reverend mother.

608
01:10:49,430 --> 01:10:52,300
- If Paul is alive, he likely knows the truth.

609
01:10:53,400 --> 01:10:54,970
And should the great houses learn

610
01:10:54,970 --> 01:10:57,500
that your father was behind the liquidation

611
01:10:57,500 --> 01:11:00,570
of the Atreides, your father will face war

612
01:11:00,600 --> 01:11:01,830
and lose the throne.

613
01:11:03,670 --> 01:11:05,270
- Then what hope is there?

614
01:11:06,830 --> 01:11:07,370
- Hope?

615
01:11:09,170 --> 01:11:11,070
- We are Bene Gesserit.

616
01:11:11,730 --> 01:11:13,570
We don't hope, we plan.

617
01:11:15,270 --> 01:11:16,870
Paul is not our only prospect.

618
01:11:19,170 --> 01:11:20,600
The Baron's youngest nephew,

619
01:11:21,170 --> 01:11:23,900
Feyd-Rautha Harkonnen,
will inherit Arrakis.

620
01:11:24,620 --> 01:11:25,960
He may be the answer.

621
01:11:26,320 --> 01:11:27,540
- Feyd-Rautha?

622
01:11:27,660 --> 01:11:29,160
He's psychotic.

623
01:11:29,180 --> 01:11:30,670
- That's irrelevant.

624
01:11:30,840 --> 01:11:34,760
The question is, can we control him?

625
01:11:35,430 --> 01:11:36,530
And I intend to find out.

626
01:12:00,970 --> 01:12:02,800
Would you like some fresh meats, my darling?

627
01:12:04,570 --> 01:12:06,570
Lungs, a liver.

628
01:12:06,930 --> 01:12:07,700
What would you like?

629
01:12:08,530 --> 01:12:09,570
I hear they're big today.

630
01:12:10,130 --> 01:12:14,230
- Your new blades for this very special day.

631
01:12:14,670 --> 01:12:16,770
Na-Baron Feyd-Rautha.

632
01:12:45,730 --> 01:12:49,070
- A nudge unbalanced. It's the tip.

633
01:12:49,200 --> 01:12:50,200
Should be sharpened.

634
01:13:06,700 --> 01:13:08,270
- I won't die like a fool.

635
01:13:08,700 --> 01:13:09,670
Kill me now.

636
01:13:10,200 --> 01:13:12,400
- No drug for you today, Atreides.

637
01:13:16,790 --> 01:13:19,520
Under our glorious black sun

638
01:13:19,820 --> 01:13:22,790
give a warm welcome to these special festivities.

639
01:13:23,890 --> 01:13:27,770
our beloved leader Baron Vladimir Harkonnen.

640
01:13:38,340 --> 01:13:41,010
His presence today, watching over

641
01:13:41,010 --> 01:13:44,010
a spectacle of blood and honor

642
01:13:44,720 --> 01:13:47,420
marks the Holy Birthday

643
01:13:47,420 --> 01:13:51,660
of our beloved na-Baron, Feyd-Rautha.

644
01:14:28,170 --> 01:14:30,370
- Welcome to Geidi Prime, sisters.

645
01:14:31,200 --> 01:14:32,700
I hope your travels were agreeable.

646
01:14:33,270 --> 01:14:34,840
A long way to come just to watch our prospect

647
01:14:34,900 --> 01:14:36,420
Risk his life, Lady Fenring.

648
01:14:36,460 --> 01:14:37,820
No fear.

649
01:14:38,020 --> 01:14:40,760
This fight's all for show.

650
01:14:41,780 --> 01:14:44,060
But we'll get a good look at him.

651
01:15:41,300 --> 01:15:44,940
In celebration of our na-Baron Feyd-Rautha

652
01:15:45,470 --> 01:15:47,800
we present a special treat

653
01:15:54,810 --> 01:15:58,980
the last three specimens of House Atreides.

654
01:16:24,430 --> 01:16:26,000
- That slave isn't drugged.

655
01:16:26,930 --> 01:16:28,330
That grub is walking straight.

656
01:16:30,030 --> 01:16:31,130
We can cancel the fight.

657
01:16:31,430 --> 01:16:33,470
- Don't spoil nephew's birthday.

658
01:17:19,630 --> 01:17:25,370
- Happy birthday, dear nephew.

659
01:17:40,780 --> 01:17:42,380
- Why do they not stop the fight?

660
01:17:42,540 --> 01:17:44,720
- Plans within plans.

661
01:17:48,920 --> 01:17:51,160
- Show me who you are.

662
01:18:07,720 --> 01:18:09,760
- There he is.

663
01:19:13,160 --> 01:19:14,880
- Stay back.

664
01:19:27,780 --> 01:19:31,080
- You fought well, Atreides.

665
01:19:51,980 --> 01:19:54,440
He'impressive, indeed.

666
01:20:05,500 --> 01:20:07,700
- The slave wasn't drugged.

667
01:20:09,430 --> 01:20:12,330
- You tried to kill me?

668
01:20:12,380 --> 01:20:14,360
- This morning you were a playboy,

669
01:20:14,440 --> 01:20:16,770
feared and envied,

670
01:20:16,760 --> 01:20:20,130
but tonight you're a hero.

671
01:20:20,140 --> 01:20:21,620
My gift to you.

672
01:20:21,660 --> 01:20:23,540
- I ought to drown you in that tub.

673
01:20:24,830 --> 01:20:26,500
- Don't be hasty.

674
01:20:27,120 --> 01:20:29,530
I have another gift for you,

675
01:20:30,100 --> 01:20:31,430
A bigger one,

676
01:20:32,870 --> 01:20:33,570
Arrakis

677
01:20:38,180 --> 01:20:39,720
What about Rabban?

678
01:20:39,630 --> 01:20:41,830
He failed to protect Spice production.

679
01:20:42,960 --> 01:20:45,260
Rabban will be reassigned.

680
01:20:48,600 --> 01:20:49,770
Tame Arrakis, Feyd.

681
01:20:51,330 --> 01:20:53,430
Free the Spice and I'll make you emperor.

682
01:21:07,600 --> 01:21:08,000
Emperor?

683
01:21:11,800 --> 01:21:12,270
How?

684
01:21:14,970 --> 01:21:17,630
The Emperor helped me destroy the Atreides

685
01:21:19,670 --> 01:21:21,230
He lent his own army to the cause.

686
01:21:21,730 --> 01:21:22,500
A serious crime.

687
01:21:24,600 --> 01:21:25,800
If it came to light,

688
01:21:26,600 --> 01:21:29,300
the Great Houses would rise against him.

689
01:21:29,930 --> 01:21:34,100
And then, who will sit on the throne?

690
01:21:35,270 --> 01:21:36,300
Feyd-Rautha

691
01:21:37,170 --> 01:21:37,900
Harkonnen!

692
01:22:18,570 --> 01:22:19,800
You're following me.

693
01:22:21,070 --> 01:22:21,570
- Am I?

694
01:22:22,100 --> 01:22:25,270
- I may have gotten lost.

695
01:22:27,570 --> 01:22:30,000
Will you show me the way out of this maze,

696
01:22:30,930 --> 01:22:32,000
My Lord na-Baron?

697
01:22:38,630 --> 01:22:41,730
- We've met, haven't we?

698
01:22:44,400 --> 01:22:46,400
- I don't think so.

699
01:22:47,970 --> 01:22:49,070
I'm Lady Margot Fenring.

700
01:22:50,070 --> 01:22:52,300
I'm here to honor your coming of age.

701
01:22:52,730 --> 01:22:54,100
- You're not allowed in this section.

702
01:22:55,830 --> 01:22:57,700
How did you get past the guards?

703
01:22:57,920 --> 01:22:58,920
- The Guards?

704
01:23:00,970 --> 01:23:03,070
May I ask what are you doing here?

705
01:23:06,070 --> 01:23:08,330
You're not taking part in your own celebrations.

706
01:23:19,940 --> 01:23:21,140
You're Bene Gesserit

707
01:23:21,770 --> 01:23:24,770
- And what makes you say that?

708
01:23:25,800 --> 01:23:27,030
- I remember now...

709
01:23:28,500 --> 01:23:30,400
I dreamed about you last night.

710
01:23:31,070 --> 01:23:32,830
- A pleasant dream, I hope.

711
01:23:32,830 --> 01:23:33,870
- Don't mock me, woman.

712
01:23:34,170 --> 01:23:35,270
- I wouldn't dare.

713
01:23:37,900 --> 01:23:39,930
- I know your Bene Gesserit tricks?

714
01:23:40,500 --> 01:23:42,900
- And what do you know about Bene Gesserit?

715
01:23:45,800 --> 01:23:46,230
Tell me.

716
01:23:50,700 --> 01:23:51,730
- Is something wrong?

717
01:23:52,130 --> 01:23:53,400
- I don't recognize this place.

718
01:23:54,300 --> 01:23:56,070
- This is the guest wing.

719
01:23:59,300 --> 01:24:00,370
- Where are you going?

720
01:24:02,790 --> 01:24:03,990
- To my room.

721
01:24:31,140 --> 01:24:36,640
- Come to me.

722
01:24:39,400 --> 01:24:41,660
Kneel.

723
01:24:55,100 --> 01:24:57,500
Put your right hand in the box.

724
01:25:11,500 --> 01:25:16,030
A sociopath of high intelligence,

725
01:25:16,160 --> 01:25:20,900
driven, cruel, but strongly motivated by honor.

726
01:25:21,600 --> 01:25:22,700
He yearns to be hurt.

727
01:25:23,700 --> 01:25:24,700
He loves pain.

728
01:25:25,870 --> 01:25:26,700
- Can he be redeemed?

729
01:25:27,370 --> 01:25:28,230
- He can be controlled.

730
01:25:29,430 --> 01:25:30,430
He's sexually vulnerable.

731
01:25:32,500 --> 01:25:33,600
- And?

732
01:25:34,770 --> 01:25:36,670
- The bloodline is secured.

733
01:25:38,830 --> 01:25:41,330
A female, as you requested.

734
01:25:42,600 --> 01:25:43,800
- You did well, Margot.

735
01:25:45,670 --> 01:25:48,000
- Respectfully, why didn't you test him yourself?

736
01:25:50,000 --> 01:25:51,500
- I'm a motherly figure.

737
01:25:52,730 --> 01:25:53,970
And based on what happened

738
01:25:54,000 --> 01:25:55,670
between him and his own mother,

739
01:25:55,680 --> 01:25:58,030
I didn't expect to be effective.

740
01:25:58,060 --> 01:25:59,840
- What happened between
him and his mother?

741
01:26:00,430 --> 01:26:01,500
- He murdered her.

742
01:26:03,100 --> 01:26:05,170
Desire and humiliation.

743
01:26:07,400 --> 01:26:08,300
Those are his levers.

744
01:26:09,730 --> 01:26:11,800
If Feyd-Rautha prevails on Arrakis,

745
01:26:12,900 --> 01:26:16,670
We shall know how to control him.

746
01:26:28,140 --> 01:26:30,780
All hail na-Baron feyd-Rautha!

747
01:26:31,150 --> 01:26:33,320
The new Planetary Governor of Arrakis.

748
01:26:35,960 --> 01:26:38,700
- Bring me this Fremen demon.

749
01:27:45,620 --> 01:27:46,820
We're in!

750
01:27:50,210 --> 01:27:51,210
- Juicy.

751
01:27:52,130 --> 01:27:54,130
- Juicy, juicy.

752
01:28:02,800 --> 01:28:03,470
- Cooking time.

753
01:29:38,800 --> 01:29:39,840
- Get out of here!

754
01:29:45,260 --> 01:29:47,200
- Come on, fight!

755
01:29:48,900 --> 01:29:50,630
- We're in deep Fremen shit.

756
01:29:52,670 --> 01:29:54,000
- Holy mother.

757
01:30:23,700 --> 01:30:25,660
- I recognize your footsteps,

758
01:30:26,490 --> 01:30:27,290
old man.

759
01:30:53,030 --> 01:30:56,230
- You young pup.

760
01:31:03,940 --> 01:31:06,030
- Well, after the Battle of Arrakeen,

761
01:31:06,820 --> 01:31:08,060
I was able to negotiate a

762
01:31:08,080 --> 01:31:09,870
trip back home for the survivors,

763
01:31:11,300 --> 01:31:12,230
thanks to these guys.

764
01:31:13,530 --> 01:31:14,100
- Why'd you stay?

765
01:31:15,700 --> 01:31:16,600
- I wanted blood.

766
01:31:19,370 --> 01:31:20,070
- Raban's head.

767
01:31:23,300 --> 01:31:26,470
- Since Muad'Dib has been driving Raban crazy,

768
01:31:26,870 --> 01:31:30,530
the smuggling business has been quite profitable.

769
01:31:31,530 --> 01:31:32,930
- Gurney Halleck the smuggler.

770
01:31:35,270 --> 01:31:36,670
- Paul Muad'Dib.

771
01:31:37,970 --> 01:31:39,870
I've heard many stories about Muad'Dib.

772
01:31:41,700 --> 01:31:42,700
None of them pretty.

773
01:31:44,700 --> 01:31:45,570
You see the fear.

774
01:31:47,030 --> 01:31:49,070
- You know our resources are limited.

775
01:31:52,030 --> 01:31:53,200
Fear is all we have.

776
01:32:11,340 --> 01:32:12,400
- How many men with you?

777
01:32:13,030 --> 01:32:13,820
- 200.

778
01:32:13,880 --> 01:32:14,680
- 200?!

779
01:32:19,920 --> 01:32:21,380
Do you realize what you'd able to

780
01:32:21,400 --> 01:32:22,740
achieve with 200 men?

781
01:32:24,120 --> 01:32:25,320
Incredible fighters.

782
01:32:25,700 --> 01:32:27,130
Duncan said there were millions of them.

783
01:32:27,130 --> 01:32:28,630
- In the Deep South, yes.

784
01:32:28,900 --> 01:32:30,000
- What are you waiting for?

785
01:32:31,370 --> 01:32:32,430
With thousands of these guys,

786
01:32:32,600 --> 01:32:34,270
you could take control of the entire planet.

787
01:32:34,570 --> 01:32:36,730
It's your father's dream, what are you afraid of?

788
01:32:36,730 --> 01:32:36,930
- Hey.

789
01:32:39,870 --> 01:32:41,130
Worship, Gurney.

790
01:32:42,870 --> 01:32:43,730
They used to be friends.

791
01:32:45,770 --> 01:32:46,330
Now they're followers.

792
01:32:47,200 --> 01:32:48,370
- Muad'Dib, the prophet.

793
01:32:49,100 --> 01:32:50,270
Why is that a bad thing?

794
01:32:50,470 --> 01:32:51,030
Use it.

795
01:32:51,070 --> 01:32:52,100
- It's not that simple.

796
01:32:52,100 --> 01:32:53,770
- You have the power to avenge your father

797
01:32:53,770 --> 01:32:54,970
and you're afraid to use it?

798
01:32:56,300 --> 01:32:58,000
- Spice opened my mind, Gurney.

799
01:32:59,030 --> 01:33:00,200
I could foresee things.

800
01:33:02,600 --> 01:33:05,830
If I go south, all my visions lead to horror.

801
01:33:06,630 --> 01:33:09,130
Billions of corpses scattered across the galaxy.

802
01:33:09,870 --> 01:33:11,070
All dying because of me.

803
01:33:12,300 --> 01:33:13,370
- Because you lose control.

804
01:33:15,200 --> 01:33:16,700
- Because I gain it.

805
01:33:35,600 --> 01:33:36,300
That's a lot of water.

806
01:33:39,100 --> 01:33:39,630
- Chani.

807
01:33:40,300 --> 01:33:40,700
- What?

808
01:33:41,570 --> 01:33:42,330
- Look at him. He's hopeless.

809
01:33:43,100 --> 01:33:43,830
- He's family.

810
01:33:46,230 --> 01:33:48,330
- Really?

811
01:33:59,930 --> 01:34:02,630
What do you think of the outsider?

812
01:34:04,070 --> 01:34:06,340
I think he's trouble.

813
01:34:08,400 --> 01:34:10,910
No, I trust Usul

814
01:34:16,400 --> 01:34:18,730
Don't need to be a prophet to see what's ahead.

815
01:34:22,200 --> 01:34:23,300
Your path leads to war.

816
01:34:25,370 --> 01:34:26,230
You know that.

817
01:34:28,930 --> 01:34:29,530
So war is coming.

818
01:34:29,600 --> 01:34:32,370
What will you do when you

819
01:34:32,400 --> 01:34:33,930
feel its breath upon your neck?

820
01:34:38,470 --> 01:34:39,970
If you don't want to raise an army in

821
01:34:39,970 --> 01:34:41,900
the South, you still have an option.

822
01:34:45,800 --> 01:34:50,330
Fire power, which you don't have.

823
01:34:52,200 --> 01:34:53,030
And here I am.

824
01:34:57,900 --> 01:35:00,000
I know where your father hid the family atomics.

825
01:35:05,800 --> 01:35:08,300
Every House possesses an atomic arsenal.

826
01:35:10,030 --> 01:35:11,470
And I thought ours had been lost.

827
01:35:13,570 --> 01:35:16,570
It's huge, Chani. Could change everything.

828
01:35:16,600 --> 01:35:24,630
I could aim the bombs at the main spice fields.

829
01:35:27,270 --> 01:35:28,770
"He who can destroy a thing

830
01:35:28,770 --> 01:35:30,430
has the real control of it."

831
01:35:32,130 --> 01:35:33,530
So you can control it and not us?

832
01:35:35,970 --> 01:35:37,400
You promised me you didn't want power.

833
01:35:39,630 --> 01:35:41,800
No matter what I do, you still don't trust me.

834
01:35:41,800 --> 01:35:44,070
Because you're a foreigner. Like your friend.

835
01:35:46,570 --> 01:35:47,600
I'm not a foreigner.

836
01:35:56,130 --> 01:35:59,030
Not to me, but to the Desert you are.

837
01:36:00,030 --> 01:36:03,630
My allegiance is to you, to the Fremen.

838
01:36:04,300 --> 01:36:05,900
I'm doing this for all of us.

839
01:36:07,600 --> 01:36:08,530
Do you believe me?

840
01:36:17,130 --> 01:36:17,970
I'll talk to Stilgar.

841
01:36:26,370 --> 01:36:26,600
There.

842
01:36:31,600 --> 01:36:34,300
It's right under everybody's noses.

843
01:36:36,370 --> 01:36:36,870
Not clever.

844
01:36:37,570 --> 01:36:39,900
That's the idea. Nobody would ever look

845
01:36:40,200 --> 01:36:41,470
in there because it's obvious.

846
01:36:44,200 --> 01:36:44,570
- Not clever.

847
01:36:45,870 --> 01:36:47,330
Did you find it?

848
01:36:48,070 --> 01:36:48,920
I didn't look for it.

849
01:36:50,030 --> 01:36:50,930
How many heads exactly?

850
01:36:53,370 --> 01:36:54,730
Enough to blow up the whole planet.

851
01:36:58,230 --> 01:36:59,270
It's a figure of speech.

852
01:37:01,470 --> 01:37:02,230
You know what I mean.

853
01:37:14,570 --> 01:37:17,570
Only with your genetic heritage.

854
01:38:06,570 --> 01:38:09,170
Your great, great grandfather's legacy.

855
01:38:10,570 --> 01:38:13,800
The 92 original Atreides family's atomic warheads.

856
01:38:17,070 --> 01:38:19,830
That. That is power.

857
01:38:27,400 --> 01:38:28,230
Imperial diary.

858
01:38:29,270 --> 01:38:30,700
Year 10,191.

859
01:38:32,070 --> 01:38:32,470
Eighth comment.

860
01:38:33,930 --> 01:38:36,330
Reports from the south of Arrakis arrive rarely.

861
01:38:37,570 --> 01:38:40,500
These are barren, burnt lands, hidden by

862
01:38:40,530 --> 01:38:42,030
sandstorms which stretch a

863
01:38:42,030 --> 01:38:43,770
thousand miles across the equator.

864
01:38:45,900 --> 01:38:47,730
Nothing can live there without faith.

865
01:38:49,570 --> 01:38:52,400
Which is why our Bene Gesserit missionaries have

866
01:38:52,400 --> 01:38:53,630
been so productive there.

867
01:38:57,200 --> 01:38:59,130
Through them we are receiving reports of

868
01:38:59,130 --> 01:39:01,170
a mysterious figure taking grip on the

869
01:39:01,200 --> 01:39:02,570
imaginations of the southern

870
01:39:02,570 --> 01:39:03,570
fundamentalist tribes.

871
01:39:04,570 --> 01:39:07,800
A new Reverend Mother from the North.

872
01:39:09,070 --> 01:39:11,100
Spreading word of the imminent arrival of

873
01:39:11,100 --> 01:39:12,500
the Lisan Al-Gaib.

874
01:39:13,370 --> 01:39:14,800
The voice from the outer world.

875
01:39:16,270 --> 01:39:18,700
With religious fervor rising in the south

876
01:39:18,730 --> 01:39:22,130
and Muad'Dibb strangling spice production in

877
01:39:22,130 --> 01:39:24,170
the north, everything

878
01:39:24,200 --> 01:39:25,570
points to the escalation of war.

879
01:39:34,860 --> 01:39:37,200
There's only one at a time...

880
01:39:37,870 --> 01:39:40,800
or they fight each other to death.

881
01:39:42,670 --> 01:39:44,270
What age is it?

882
01:39:44,610 --> 01:39:45,710
Very young.

883
01:39:49,980 --> 01:39:52,350
My daughter asks, how is it done?

884
01:39:57,070 --> 01:39:57,770
Quiet.

885
01:41:41,520 --> 01:41:44,490
The Water of Life.

886
01:41:46,930 --> 01:41:48,000
Listen carefully.

887
01:41:49,030 --> 01:41:50,570
Soon a man is going to visit your temple

888
01:41:50,570 --> 01:41:52,330
and he may want you to perform the rites.

889
01:41:53,470 --> 01:41:55,500
Reverend Mother, it is forbidden.

890
01:41:57,210 --> 01:41:58,770
You question the prophecy?

891
01:41:59,010 --> 01:42:01,180
No man will survive.

892
01:42:01,770 --> 01:42:02,600
Let him try.

893
01:42:47,900 --> 01:42:49,060
What the hell?

894
01:42:52,100 --> 01:42:52,630
Chani!

895
01:43:00,230 --> 01:43:00,730
Chani!

896
01:43:04,700 --> 01:43:05,530
Chani.

897
01:43:41,600 --> 01:43:43,370
Old-fashioned artillery.

898
01:43:44,730 --> 01:43:45,100
Genius.

899
01:43:46,700 --> 01:43:48,930
We're literally melting rock on their heads.

900
01:43:49,470 --> 01:43:50,470
I want to go on the ground.

901
01:43:51,530 --> 01:43:52,270
Prepare my troops.

902
01:43:52,600 --> 01:43:52,930
My Lord,

903
01:43:53,370 --> 01:43:55,030
I would recommend you stay inside the...

904
01:43:55,570 --> 01:43:57,500
Bring his body to my quarters.

905
01:43:58,930 --> 01:44:00,170
My poor darlings are hungry.

906
01:44:01,300 --> 01:44:02,630
There was no food for them on the flight.

907
01:44:04,570 --> 01:44:05,970
What are you doing here?

908
01:44:06,970 --> 01:44:07,830
It's early morning.

909
01:44:08,370 --> 01:44:09,600
What are you doing here?

910
01:44:10,570 --> 01:44:12,070
Kiss my feet, Brother.

911
01:44:16,730 --> 01:44:21,500
You humiliated our family.

912
01:44:22,970 --> 01:44:24,330
You humiliated me.

913
01:44:25,600 --> 01:44:25,930
Please.

914
01:44:27,730 --> 01:44:28,330
Or die.

915
01:44:38,570 --> 01:44:39,830
We're even now.

916
01:44:46,570 --> 01:44:48,830
Embarass the family one more time.

917
01:44:50,100 --> 01:44:51,330
It will be the be the last.

918
01:45:22,040 --> 01:45:24,210
They're all dead!

919
01:45:24,980 --> 01:45:26,880
I lost them all in the fire.

920
01:45:27,120 --> 01:45:29,120
- They didn't even engaged
on the ground

921
01:45:29,140 --> 01:45:31,140
like honourable fighters.

922
01:45:32,820 --> 01:45:35,290
The whole of the North has been hit.

923
01:45:40,330 --> 01:45:43,300
There is a call for a war council
in the South.

924
01:45:43,370 --> 01:45:45,800
Every leader must attend.

925
01:45:47,840 --> 01:45:50,010
Muad'Dib, they're waiting for you.

926
01:46:03,570 --> 01:46:05,570
Ushur, in the south,

927
01:46:06,900 --> 01:46:08,770
Only leaders are allowed to speak.

928
01:46:10,530 --> 01:46:11,800
You must take my place.

929
01:46:12,570 --> 01:46:13,300
I can't do that

930
01:46:13,300 --> 01:46:15,530
It is a good time to cross blades with me.

931
01:46:15,600 --> 01:46:17,330
I am weak.

932
01:46:17,570 --> 01:46:19,270
I am an easy kill.

933
01:46:19,770 --> 01:46:21,130
I'd rather cut off my own hand.

934
01:46:21,130 --> 01:46:21,870
We need you.

935
01:46:21,900 --> 01:46:22,830
We need the Lisan al-Gaib

936
01:46:22,870 --> 01:46:24,600
to lead our people.

937
01:46:24,600 --> 01:46:26,270
You know what I think of that story

938
01:46:26,270 --> 01:46:27,830
I don't care what you believe.

939
01:46:27,870 --> 01:46:28,530
I believe.

940
01:46:42,570 --> 01:46:44,330
I didn't see it coming.

941
01:46:46,300 --> 01:46:47,830
The Harkonnens aren't done here.

942
01:46:48,600 --> 01:46:50,500
They just went back to reload.

943
01:46:51,330 --> 01:46:52,030
We're setting Thumpers.

944
01:46:53,400 --> 01:46:54,400
We're moving everyone to the South.

945
01:46:54,770 --> 01:46:56,270
I'll stay behind and cover your retreat.

946
01:46:56,770 --> 01:46:57,530
What are you talking about?

947
01:46:57,570 --> 01:46:58,830
Chani, I can't go with you.

948
01:46:59,730 --> 01:47:00,330
You know why.

949
01:47:00,930 --> 01:47:01,830
- I'll stay too.

950
01:47:01,870 --> 01:47:03,370
- Nobody stays but me.

951
01:47:03,390 --> 01:47:03,570
- Paul...

952
01:47:03,600 --> 01:47:04,970
- That's an order, Gurney Halleck!

953
01:47:05,000 --> 01:47:05,930
Go south!

954
01:47:06,270 --> 01:47:06,870
Protect my mother.

955
01:47:09,700 --> 01:47:10,200
My lord.

956
01:47:11,420 --> 01:47:13,560
None off these people will leave without you

957
01:47:13,860 --> 01:47:16,560
I can't go South.

958
01:47:20,570 --> 01:47:22,570
He's afraid of the fundamentalists.

959
01:47:24,430 --> 01:47:25,670
He should be.

960
01:47:46,570 --> 01:47:48,630
Talk to me, Jamis.

961
01:47:55,930 --> 01:47:58,000
Kwisatz Haderach.

962
01:47:59,900 --> 01:48:01,830
You see only fragments.

963
01:48:02,870 --> 01:48:05,130
You can only see the future.

964
01:48:05,570 --> 01:48:07,300
You haven't seen the past.

965
01:48:11,970 --> 01:48:13,570
You need to drink the Water of Life.

966
01:48:14,800 --> 01:48:17,200
And you will see everything.

967
01:48:20,570 --> 01:48:22,830
The good hunter always climbs the highest dune

968
01:48:22,870 --> 01:48:23,970
before his hunt.

969
01:48:25,030 --> 01:48:27,230
He needs to see.

970
01:48:28,970 --> 01:48:30,670
As far as he can see.

971
01:48:35,570 --> 01:48:37,000
You need to see.

972
01:48:39,900 --> 01:48:42,000
You must drink the Water of Life.

973
01:48:43,270 --> 01:48:44,970
Your mind is going to open.

974
01:48:47,730 --> 01:48:48,830
And you will see.

975
01:49:07,570 --> 01:49:09,500
The world has many choices for us.

976
01:49:13,100 --> 01:49:16,500
If I go south, I might lose you.

977
01:49:16,600 --> 01:49:19,100
You will never lose me.

978
01:49:19,730 --> 01:49:20,430
Paul Atreides

979
01:49:22,570 --> 01:49:24,770
Not as long as you stay who you are.

980
01:49:32,370 --> 01:49:34,400
I will cross the storms with you.

981
01:49:34,900 --> 01:49:35,230
Go South.

982
01:49:37,100 --> 01:49:38,200
Bring our people to safety.

983
01:49:44,600 --> 01:49:47,830
And then I will do what must be done.

984
01:50:13,230 --> 01:50:14,500
Spy. Left behind.

985
01:50:15,470 --> 01:50:16,370
No trace of the others.

986
01:50:17,130 --> 01:50:19,200
They have gone south to hide in the storms.

987
01:50:24,900 --> 01:50:26,170
Send this message to the Baron.

988
01:50:26,600 --> 01:50:28,500
The North is liberated and secured.

989
01:50:29,070 --> 01:50:30,270
Harvest spice at will.

990
01:50:31,400 --> 01:50:32,230
Yes, na-Baron.

991
01:50:47,570 --> 01:50:50,670
You killed nine of my men with one single blade.

992
01:50:52,270 --> 01:50:53,100
She won't talk.

993
01:50:54,230 --> 01:50:54,970
Tell her that's fine.

994
01:50:55,770 --> 01:50:58,130
I already know everything I need to know.

995
01:51:06,200 --> 01:51:07,600
Only pleasure remains.

996
01:52:16,990 --> 01:52:19,630
You're not allowed in here, stranger.

997
01:52:19,860 --> 01:52:21,830
Leave or die.

998
01:52:23,200 --> 01:52:25,870
I should be welcomed.

999
01:52:29,640 --> 01:52:33,640
If you drink you shall die.

1000
01:52:34,340 --> 01:52:38,950
If you drink you may see.

1001
01:53:13,290 --> 01:53:16,820
Now that you can see our past,

1002
01:53:20,960 --> 01:53:24,480
you can see your future.

1003
01:53:24,500 --> 01:53:27,410
Your future...

1004
01:53:44,260 --> 01:53:46,010
My brother.

1005
01:53:46,010 --> 01:53:48,330
My dearest brother.

1006
01:53:48,330 --> 01:53:51,480
You are not prepared for what is to come.

1007
01:53:53,330 --> 01:53:56,560
Now learn the truth about our family

1008
01:53:56,560 --> 01:53:58,890
and it will hurt you...

1009
01:53:58,890 --> 01:54:00,580
...to the core.

1010
01:54:01,820 --> 01:54:03,060
Paul.

1011
01:54:03,060 --> 01:54:05,160
Don't worry.

1012
01:54:05,160 --> 01:54:06,970
I'm with you.

1013
01:54:06,970 --> 01:54:09,760
I love you.

1014
01:54:14,180 --> 01:54:15,210
Who knows about this?

1015
01:54:15,240 --> 01:54:16,640
Only you, Reverend Mother.

1016
01:54:16,740 --> 01:54:17,680
Good.

1017
01:54:18,150 --> 01:54:19,380
Where are the others?

1018
01:54:19,650 --> 01:54:21,450
They just arrived from the North.

1019
01:54:22,520 --> 01:54:23,260
Find them!

1020
01:54:53,300 --> 01:54:54,480
Paul.

1021
01:54:55,120 --> 01:54:56,300
Paul.

1022
01:54:58,520 --> 01:54:59,780
I'm here.

1023
01:55:04,520 --> 01:55:08,920
What happened?

1024
01:55:19,220 --> 01:55:20,380
He's dead.

1025
01:55:20,400 --> 01:55:23,140
His vital signs are so low they can't be detected.

1026
01:55:23,260 --> 01:55:24,560
But he's alive.

1027
01:55:24,760 --> 01:55:26,600
What did you do to him?

1028
01:55:27,580 --> 01:55:29,100
No, not that.

1029
01:55:29,100 --> 01:55:30,320
Why would he do that?

1030
01:55:32,050 --> 01:55:34,120
Because He is the One.

1031
01:55:34,290 --> 01:55:36,720
The Lisan al-Gaib should find His way

1032
01:55:36,890 --> 01:55:38,960
to where no man has ever been.

1033
01:55:38,980 --> 01:55:42,620
Chani, his body is fighting the poison

1034
01:55:39,160 --> 01:55:40,600
You're insane!

1035
01:55:42,640 --> 01:55:43,960
and he needs your help.

1036
01:55:44,000 --> 01:55:44,820
You do it.

1037
01:55:46,280 --> 01:55:47,720
You did this to him.

1038
01:55:47,760 --> 01:55:49,460
You did this to your own son.

1039
01:55:49,480 --> 01:55:50,220
You do it.

1040
01:55:50,280 --> 01:55:51,340
Fix him yourself.

1041
01:55:51,400 --> 01:55:54,140
Chani, you might not believe in the

1042
01:55:54,140 --> 01:55:55,700
prophecy but you're a part of it.

1043
01:55:55,740 --> 01:55:57,420
- You're the poison.

1044
01:55:57,520 --> 01:55:59,120
You and your lies.

1045
01:55:59,200 --> 01:56:01,340
- Why would you do this to me?

1046
01:56:00,220 --> 01:56:01,240
- Do it.

1047
01:56:12,160 --> 01:56:15,700
He shall come back from the dead

1048
01:56:16,100 --> 01:56:18,430
with Desert Spring tears.

1049
01:56:21,070 --> 01:56:23,570
Bring me a drop of Water of Life.

1050
01:56:23,640 --> 01:56:25,240
As written.

1051
01:57:19,700 --> 01:57:20,430
Are you okay?

1052
01:57:21,300 --> 01:57:21,960
Yes.

1053
01:57:31,440 --> 01:57:32,980
Are you sure?

1054
01:57:36,670 --> 01:57:37,620
Thanks to you.

1055
01:58:23,670 --> 01:58:25,670
I'm sorry about Chani.

1056
01:58:26,240 --> 01:58:29,360
She'll come to understand.

1057
01:58:29,440 --> 01:58:30,780
I've seen it.

1058
01:58:32,530 --> 01:58:33,230
You can see.

1059
01:58:34,530 --> 01:58:36,400
The visions are clear now.

1060
01:58:38,970 --> 01:58:42,300
I see possible futures all at once.

1061
01:58:43,700 --> 01:58:46,270
Our enemies are all around us.

1062
01:58:47,170 --> 01:58:48,730
That's not the only future they prevail.

1063
01:58:49,970 --> 01:58:51,630
I do see a way.

1064
01:58:53,530 --> 01:58:55,200
There is a narrow way through.

1065
01:59:04,970 --> 01:59:07,130
I saw our bloodline mother.

1066
01:59:08,830 --> 01:59:10,400
Written across time.

1067
01:59:23,120 --> 01:59:24,500
You're the daughter of

1068
01:59:24,520 --> 01:59:26,300
Baron Vladimir Harkonnen.

1069
01:59:29,000 --> 01:59:30,680
Did my father know?

1070
01:59:36,560 --> 01:59:38,260
I didn't know myself until

1071
01:59:38,300 --> 01:59:40,100
I took the worm's poison.

1072
01:59:47,020 --> 01:59:49,620
We're Harkonnens.

1073
01:59:53,100 --> 01:59:55,580
So this is how we'll survive.

1074
01:59:57,260 --> 01:59:59,100
By being Harkonnens.

1075
02:01:35,370 --> 02:01:36,070
We must talk.

1076
02:01:38,370 --> 02:01:38,930
Stilgar.

1077
02:01:39,730 --> 02:01:40,600
You can stop this!

1078
02:01:40,720 --> 02:01:41,480
Do you hear me?

1079
02:01:41,520 --> 02:01:43,020
You have the power to stop this!

1080
02:01:43,060 --> 02:01:44,320
Northern woman.

1081
02:01:44,300 --> 02:01:45,770
You're not to want to speak inside the circle.

1082
02:01:46,270 --> 02:01:48,000
If you want to speak, you know what to do.

1083
02:01:48,030 --> 02:01:48,630
Stilgar, please.

1084
02:01:50,370 --> 02:01:51,700
Arrakis is sinking.

1085
02:02:04,670 --> 02:02:06,940
This prophecy is how they enslave us.

1086
02:02:07,040 --> 02:02:08,270
How they dominate.

1087
02:02:09,670 --> 02:02:11,330
You'll get yourself in trouble.

1088
02:02:11,400 --> 02:02:12,670
This is none your business.

1089
02:02:12,670 --> 02:02:15,200
Raban Harkonnen himself killed my family.

1090
02:02:15,240 --> 02:02:17,100
He gave me this scar to remember him by.

1091
02:02:17,130 --> 02:02:18,530
This is all of my business.

1092
02:03:04,030 --> 02:03:06,730
Muad'dib. Only tribe leaders can speak

1093
02:03:07,200 --> 02:03:08,800
If you wish to share your voice,

1094
02:03:10,000 --> 02:03:12,600
You must take his place by defeating him

1095
02:03:12,630 --> 02:03:14,570
and returning his water to the well.

1096
02:03:15,330 --> 02:03:17,030
You think I'm stupid enough to deprive

1097
02:03:17,070 --> 02:03:18,730
myself of the best of us.

1098
02:03:20,090 --> 02:03:23,020
Do you smash a knife before battle?

1099
02:03:23,270 --> 02:03:24,770
- Take my life, Usul.

1100
02:03:25,870 --> 02:03:27,200
It is the only way.

1101
02:03:28,100 --> 02:03:31,670
- I'm pointing the way!

1102
02:03:32,140 --> 02:03:33,140
Slow down.

1103
02:03:32,970 --> 02:03:36,040
There is no one in this room...

1104
02:03:36,300 --> 02:03:40,070
...who can stand against me.

1105
02:03:51,390 --> 02:03:55,820
Your mothers warned you about my coming.

1106
02:03:56,390 --> 02:03:58,460
Fear the moment.

1107
02:04:08,770 --> 02:04:10,930
But you think you could have a chance.

1108
02:04:13,320 --> 02:04:16,040
But you're afraid.

1109
02:04:16,100 --> 02:04:19,050
What if I could be the One?

1110
02:04:19,120 --> 02:04:24,820
This could be the moment you've been praying for, all your life.

1111
02:04:27,350 --> 02:04:29,690
Right now you're praying...

1112
02:04:29,790 --> 02:04:31,490
...to your grandmother...

1113
02:04:31,760 --> 02:04:35,730
...that died nine moons ago.

1114
02:04:38,000 --> 02:04:39,670
She lost an eye.

1115
02:04:40,000 --> 02:04:43,940
A rock smashed her face as she was crossing the storm.

1116
02:04:43,970 --> 02:04:47,310
She was twelve when it happened.

1117
02:04:47,710 --> 02:04:52,610
At that time, this world had a Fremen name.

1118
02:04:54,610 --> 02:04:56,020
Dune.

1119
02:04:56,120 --> 02:04:57,850
- Lisan al-Gaib!

1120
02:05:00,530 --> 02:05:01,580
- Mahdi.

1121
02:05:07,330 --> 02:05:09,530
In your nightmares

1122
02:05:09,800 --> 02:05:11,770
you give water to the dead

1123
02:05:12,030 --> 02:05:14,740
and it brings joy to your heart.

1124
02:05:22,810 --> 02:05:25,380
Mahdi, what do you foresee for us?

1125
02:05:26,910 --> 02:05:29,250
Green Paradise.

1126
02:05:30,550 --> 02:05:33,040
Lisan al-Gaib...

1127
02:05:33,050 --> 02:05:35,590
...Show us the way!

1128
02:05:40,900 --> 02:05:43,630
This is my father's ducal signet.

1129
02:05:53,830 --> 02:05:59,370
I am Paul Muad'Dib Atreides, Duke of Arrakis.

1130
02:05:59,780 --> 02:06:01,980
The Hand of God be my witness.

1131
02:06:02,420 --> 02:06:04,850
I am the Voice from the Outer World.

1132
02:06:05,120 --> 02:06:06,490
I will lead you

1133
02:06:06,590 --> 02:06:07,890
to PARADISE!

1134
02:07:07,100 --> 02:07:08,830
Paul Atreides is still alive.

1135
02:07:11,240 --> 02:07:13,040
He challenges my father.

1136
02:07:14,230 --> 02:07:15,430
You've never been on Arrakis.

1137
02:07:17,630 --> 02:07:19,130
It's quite impressive, you'll see.

1138
02:07:19,500 --> 02:07:20,670
Was this all upon your advice?

1139
02:07:21,100 --> 02:07:21,300
What?

1140
02:07:22,800 --> 02:07:24,470
Did you counsel my father

1141
02:07:24,470 --> 02:07:25,870
to exterminate the Atreides?

1142
02:07:26,130 --> 02:07:26,730
Of course I did.

1143
02:07:27,270 --> 02:07:28,370
Why else would it have happened?

1144
02:07:29,570 --> 02:07:31,800
You tried to sacrifice an entire bloodline.

1145
02:07:31,800 --> 02:07:33,400
And I was right to do it.

1146
02:07:34,170 --> 02:07:37,240
The Kwisatz Haderach is a form of power

1147
02:07:37,260 --> 02:07:39,300
that our world has not yet seen.

1148
02:07:39,860 --> 02:07:41,560
The ultimate power.

1149
02:07:42,570 --> 02:07:44,170
For ninety generations we have

1150
02:07:44,400 --> 02:07:45,630
supervised House Atreides.

1151
02:07:46,100 --> 02:07:47,300
They were promising, but they were

1152
02:07:47,330 --> 02:07:48,770
becoming dangerously defiant.

1153
02:07:49,400 --> 02:07:51,270
Their bloodline had to be terminated.

1154
02:07:52,870 --> 02:07:54,900
That is why we have put many bloodlines at work.

1155
02:07:55,330 --> 02:07:56,000
Several prospects.

1156
02:07:56,500 --> 02:07:57,430
- But it's backfired.

1157
02:07:58,000 --> 02:07:58,670
Paul is alive.

1158
02:07:58,900 --> 02:08:00,270
And if he defeats.

1159
02:08:00,270 --> 02:08:01,530
Vaidrathir, my father is...

1160
02:08:01,570 --> 02:08:02,770
- Your father will lose the throne, no

1161
02:08:02,770 --> 02:08:03,600
matter who prevails.

1162
02:08:05,570 --> 02:08:06,730
But there is one way your

1163
02:08:06,730 --> 02:08:08,170
family can remain in power.

1164
02:08:08,570 --> 02:08:09,830
And through you, the

1165
02:08:09,870 --> 02:08:11,570
continuation of our stewardship.

1166
02:08:13,240 --> 02:08:16,600
One way. Are you prepared.

1167
02:08:18,270 --> 02:08:19,270
You've been preparing me my

1168
02:08:19,270 --> 02:08:20,330
whole life, Reverend Mother.

1169
02:08:23,400 --> 02:08:25,120
You're heading North with the others?

1170
02:08:25,600 --> 02:08:26,620
I'm fedaykin.

1171
02:08:26,660 --> 02:08:28,230
I follow my leaders. If

1172
02:08:28,230 --> 02:08:30,060
fighting goes north, I go north.

1173
02:08:30,530 --> 02:08:31,860
Paul didn't have a choice, Chani.

1174
02:08:31,880 --> 02:08:33,200
I won't be fighting for him.

1175
02:08:34,370 --> 02:08:35,300
I'm fighting for my people.

1176
02:08:39,530 --> 02:08:40,930
I came to wish you best of luck.

1177
02:08:42,670 --> 02:08:43,530
I'd wish you the same.

1178
02:08:46,070 --> 02:08:47,270
But it seems you've won your battle.

1179
02:09:10,920 --> 02:09:12,080
They took the bait.

1180
02:09:18,440 --> 02:09:21,160
The Emperor is very obliging.

1181
02:09:21,240 --> 02:09:23,500
He's right on time.

1182
02:09:24,720 --> 02:09:26,390
As you foresaw, Muad'Dib.

1183
02:09:28,590 --> 02:09:30,820
A great-grandmother of a storm.

1184
02:09:57,020 --> 02:09:58,460
What is he doing here?

1185
02:09:58,960 --> 02:10:01,200
I brought spice production under control.

1186
02:10:04,480 --> 02:10:05,580
What do we do?

1187
02:10:06,900 --> 02:10:09,440
Send messages to the great Houses.

1188
02:10:09,600 --> 02:10:11,140
Tell them that Arrakis is

1189
02:10:11,200 --> 02:10:13,340
underer Sardaukar attack.

1190
02:10:14,120 --> 02:10:17,060
Tell them their future hangs in the balance.

1191
02:10:41,130 --> 02:10:43,260
He brought his whole army.

1192
02:10:43,870 --> 02:10:46,030
When the storm hits this ridge,

1193
02:10:46,120 --> 02:10:48,700
Gurney will open the way for you Stilgar.

1194
02:10:48,780 --> 02:10:51,200
So you can enter the basin from the west

1195
02:10:51,230 --> 02:10:53,630
and distract their defense systems.

1196
02:10:53,860 --> 02:10:55,640
Chani, I want you and your Feydaykins

1197
02:10:55,660 --> 02:10:57,230
to then attack from the east,

1198
02:10:57,380 --> 02:10:59,300
Inside the basin.

1199
02:10:59,840 --> 02:11:01,960
I'll strike from the north and head on

1200
02:11:02,230 --> 02:11:03,930
with the fundamentalist troops.

1201
02:11:04,120 --> 02:11:06,570
And I'll serve Arrakeen for dessert.

1202
02:11:06,940 --> 02:11:09,370
Remember, I need the emperor alive.

1203
02:11:10,820 --> 02:11:13,230
Long live the fighters!

1204
02:12:18,900 --> 02:12:23,130
Baron, do you have any idea who this

1205
02:12:23,170 --> 02:12:24,730
Muad'Dib could be?

1206
02:12:26,000 --> 02:12:27,940
Some fanatic, your majesty.

1207
02:12:28,000 --> 02:12:29,020
That's all we know.

1208
02:12:29,070 --> 02:12:30,430
- More. More, give me more.

1209
02:12:31,080 --> 02:12:32,520
- He's a madman!

1210
02:12:32,370 --> 02:12:32,800
- Mad?

1211
02:12:32,920 --> 02:12:33,940
- All Fremen are mad.

1212
02:12:36,900 --> 02:12:40,080
- That's all you know, really?

1213
02:12:41,180 --> 02:12:42,760
Muad'Dib is dead.

1214
02:12:44,920 --> 02:12:47,760
Or he went hiding in the southern storms.

1215
02:12:47,760 --> 02:12:49,580
It means the same thing.

1216
02:12:50,020 --> 02:12:52,460
They speak the truth.

1217
02:12:50,480 --> 02:12:52,720
Your majesty, the sandstorm that's

1218
02:12:52,760 --> 02:12:55,660
approaching threatens the integrity of our shields.

1219
02:12:55,880 --> 02:12:57,860
We recommend going back into orbit.

1220
02:12:57,900 --> 02:13:00,220
The mountains will protect us from most of it,

1221
02:13:01,080 --> 02:13:02,020
your Majesty.

1222
02:13:03,880 --> 02:13:08,660
Baron, have you ever investigated the south...

1223
02:13:08,680 --> 02:13:11,020
regions of Arrakis?

1224
02:13:11,730 --> 02:13:13,800
All the entire region is uninhabitable.

1225
02:13:14,370 --> 02:13:15,430
It's well known, your Majesty.

1226
02:13:17,130 --> 02:13:19,530
Your uninhabited South,

1227
02:13:21,200 --> 02:13:23,270
exhibits evidence of human activity.

1228
02:13:24,030 --> 02:13:25,130
I wasn't aware of this.

1229
02:13:26,370 --> 02:13:28,500
I swear to you, I
wasn't aware of anything.

1230
02:13:33,870 --> 02:13:35,280
Muad'Dib is alive.

1231
02:13:36,830 --> 02:13:38,070
I must find him.

1232
02:14:54,150 --> 02:14:55,620
Long live the fighters!

1233
02:21:02,160 --> 02:21:04,100
Grandfather.

1234
02:21:25,380 --> 02:21:27,580
You die like an animal.

1235
02:21:58,140 --> 02:21:59,880
Muad'Dib.

1236
02:22:00,840 --> 02:22:03,140
Bring the prisoners to the Residency.

1237
02:22:03,910 --> 02:22:06,150
Kill the Sardaukar.

1238
02:22:08,720 --> 02:22:11,450
Give the Baron's body to the desert.

1239
02:25:06,100 --> 02:25:07,030
War ships.

1240
02:25:09,500 --> 02:25:10,500
The Great Houses.

1241
02:25:11,840 --> 02:25:13,030
Gurney, it's time.

1242
02:25:13,420 --> 02:25:14,660
Bring the prisoners.

1243
02:25:14,900 --> 02:25:15,740
My lord.

1244
02:25:41,980 --> 02:25:43,280
This isn't over yet.

1245
02:25:48,760 --> 02:25:49,960
I want you to know...

1246
02:25:53,400 --> 02:25:54,900
I will love you as long as I breathe.

1247
02:26:07,460 --> 02:26:10,100
There's an amassed armada, in orbit.

1248
02:26:13,600 --> 02:26:15,600
You're facing a full invasion, Fremen.

1249
02:26:17,330 --> 02:26:18,600
How can you be so sure the

1250
02:26:18,600 --> 02:26:20,160
Great Houses are here for me?

1251
02:26:26,120 --> 02:26:28,330
They may be curious to hear my side of

1252
02:26:28,330 --> 02:26:29,600
the story, don't you think?

1253
02:26:30,700 --> 02:26:32,800
I am Paul Atreides, son of

1254
02:26:32,800 --> 02:26:35,160
Leto Atreides, Duke of Arrakis.

1255
02:26:36,860 --> 02:26:37,380
Gurney.

1256
02:26:37,660 --> 02:26:38,160
- My Lord?

1257
02:26:38,160 --> 02:26:40,560
- Send a warning to all ships.

1258
02:26:40,700 --> 02:26:42,930
If the great houses attack, our atomics

1259
02:26:42,960 --> 02:26:44,660
will obliterate all spice fields.

1260
02:26:46,600 --> 02:26:48,020
You're out of your mind?

1261
02:26:48,340 --> 02:26:49,120
- He's bluffing

1262
02:26:49,160 --> 02:26:51,260
- Consider what you're about to do, Paul Atreides.

1263
02:26:51,290 --> 02:26:52,190
- Silence!

1264
02:26:55,700 --> 02:26:56,530
Abomination.

1265
02:27:01,140 --> 02:27:02,560
Message sent, my Lord

1266
02:27:04,360 --> 02:27:08,740
As I stand on the Imperium, you will bow at my feet

1267
02:27:08,760 --> 02:27:10,080
- Your feet?

1268
02:27:10,560 --> 02:27:12,260
You'll be lucky to keep your head.

1269
02:27:15,360 --> 02:27:17,060
I'll take the hand of your daughter.

1270
02:27:19,300 --> 02:27:21,280
She will remain safe, and we will rule

1271
02:27:21,860 --> 02:27:24,120
together over the Empire.

1272
02:27:33,100 --> 02:27:34,100
But you...

1273
02:27:37,540 --> 02:27:39,620
You'll have to
answer for my father.

1274
02:27:47,160 --> 02:27:51,980
Do you know why I killed him?

1275
02:27:52,080 --> 02:27:54,180
Because he was a man who

1276
02:27:54,180 --> 02:27:56,160
believed in the rules of the heart.

1277
02:27:57,500 --> 02:27:59,400
But the heart is not meant to rule.

1278
02:28:00,760 --> 02:28:08,130
In other words, your father was a weak man.

1279
02:28:16,900 --> 02:28:20,160
Stand or choose your champion.

1280
02:28:22,900 --> 02:28:24,430
I'm here, Atreides.

1281
02:28:26,900 --> 02:28:27,960
I need a blade.

1282
02:28:28,290 --> 02:28:30,290
- Accept mine.

1283
02:28:42,060 --> 02:28:44,100
Do not stain your hands on this animal,

1284
02:28:44,960 --> 02:28:46,200
They need you with them.

1285
02:28:46,460 --> 02:28:47,860
- It's my burden, Gurney.

1286
02:29:05,900 --> 02:29:07,760
Why is he taking such risks?

1287
02:29:08,930 --> 02:29:11,000
- Muad'Dib leads the way.

1288
02:29:34,900 --> 02:29:36,660
I'm happy to finally meet you,

1289
02:29:38,140 --> 02:29:39,080
cousin.

1290
02:29:39,800 --> 02:29:40,900
- Cousin?

1291
02:29:41,820 --> 02:29:43,060
Is that right?

1292
02:29:44,800 --> 02:29:45,500
Well.

1293
02:29:47,500 --> 02:29:48,460
You wouldn't be the

1294
02:29:48,460 --> 02:29:49,960
first relative I've killed.

1295
02:29:52,300 --> 02:29:54,960
May thy knife chip and shatter.

1296
02:30:00,300 --> 02:30:02,400
- May thy knife chip and shatter.

1297
02:30:53,900 --> 02:30:54,500
She's your pet?

1298
02:31:11,560 --> 02:31:14,630
Any special attention for the pet?

1299
02:32:40,760 --> 02:32:42,160
You've fought well, Atreides.

1300
02:32:51,100 --> 02:32:52,240
Lisan al-Gaib!

1301
02:33:47,200 --> 02:33:49,030
You should have believed.

1302
02:33:50,200 --> 02:33:51,800
You chose the wrong side.

1303
02:33:53,140 --> 02:33:53,880
Side?

1304
02:33:54,930 --> 02:33:56,450
You of all people should know.

1305
02:33:57,920 --> 02:34:02,160
There are no sides, Reverend Mother.

1306
02:34:21,200 --> 02:34:23,200
The life debt has been paid.

1307
02:34:23,200 --> 02:34:24,260
Spare my father now and I

1308
02:34:24,260 --> 02:34:25,260
will be your willing bride.

1309
02:34:25,400 --> 02:34:26,500
The throne will be yours.

1310
02:35:59,280 --> 02:36:02,720
My lord, the great houses have answered.

1311
02:36:02,840 --> 02:36:04,760
They refuse to honor your ascendency.

1312
02:36:06,400 --> 02:36:08,760
We await your orders, Lisan al-Gaib

1313
02:36:18,620 --> 02:36:20,340
Lead them to paradise.

1314
02:36:51,700 --> 02:36:52,960
What is happening, mother?

1315
02:36:55,200 --> 02:36:57,560
Your brother attacks the Great Houses.

1316
02:37:01,430 --> 02:37:04,060
The Holy War begins.

1317
02:39:25,720 --> 02:39:26,120
*Subtitles By: Will1869, TearsHD, Bani, Snoopy*

1318
02:39:26,160 --> 02:39:26,820
*Merged & retimed by Bani for the clean COLLECTIVE release.*
`;

const subtitles = parseSubtitles(subtitlesText);
console.log(subtitles);

document.addEventListener("DOMContentLoaded", function () {
  const subtitlesDiv = document.getElementById("subtitles");

  let startTime = Date.now(); // Get the start time

  setInterval(function () {
    const elapsedTime = Date.now() - startTime; // Calculate elapsed time since start
    const currentTime = Math.floor(elapsedTime / 1000); // Convert elapsed time to seconds
    console.log(currentTime);

    const currentSubtitle = subtitles.find(
      (subtitle) =>
        currentTime >= subtitle.startTime && currentTime < subtitle.endTime
    ); // Find the subtitle for the current time
    console.log(currentSubtitle);
    if (currentSubtitle) {
      subtitlesDiv.textContent = currentSubtitle.text;
    } else {
      subtitlesDiv.textContent = "";
    }
  }, 1000); // Check every second
});
