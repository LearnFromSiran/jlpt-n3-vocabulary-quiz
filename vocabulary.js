// Bundled for offline study. Initial N3 word data adapted from public JLPT study listings.
const vocabulary = [
  {
    "id": "n3-1",
    "kanji": "生",
    "kana": "なま",
    "romaji": "なま",
    "english": "raw; uncooked; fresh; natural",
    "nepali": ""
  },
  {
    "id": "n3-2",
    "kanji": "のんびり",
    "kana": "のんびり",
    "romaji": "のんびり",
    "english": "carefree; at leisure",
    "nepali": ""
  },
  {
    "id": "n3-3",
    "kanji": "文字",
    "kana": "もじ",
    "romaji": "もじ",
    "english": "letter; character",
    "nepali": ""
  },
  {
    "id": "n3-4",
    "kanji": "柄",
    "kana": "がら",
    "romaji": "がら",
    "english": "pattern; design",
    "nepali": ""
  },
  {
    "id": "n3-5",
    "kanji": "梅雨",
    "kana": "つゆ",
    "romaji": "つゆ",
    "english": "rainy season (early June to mid-July)",
    "nepali": ""
  },
  {
    "id": "n3-6",
    "kanji": "がっかり",
    "kana": "がっかり",
    "romaji": "がっかり",
    "english": "be disappointed; dejected; feel let down",
    "nepali": ""
  },
  {
    "id": "n3-7",
    "kanji": "マイク",
    "kana": "マイク",
    "romaji": "マイク",
    "english": "(abbr) microphone",
    "nepali": ""
  },
  {
    "id": "n3-8",
    "kanji": "一言",
    "kana": "ひとこと",
    "romaji": "ひとこと",
    "english": "single word; brief comment",
    "nepali": ""
  },
  {
    "id": "n3-9",
    "kanji": "不満",
    "kana": "ふまん",
    "romaji": "ふまん",
    "english": "dissatisfaction; discontent; displeasure",
    "nepali": ""
  },
  {
    "id": "n3-10",
    "kanji": "不足",
    "kana": "ふそく",
    "romaji": "ふそく",
    "english": "insufficiency; lack; shortage",
    "nepali": ""
  },
  {
    "id": "n3-11",
    "kanji": "世の中",
    "kana": "よのなか",
    "romaji": "よのなか",
    "english": "society; the world",
    "nepali": ""
  },
  {
    "id": "n3-12",
    "kanji": "予算",
    "kana": "よさん",
    "romaji": "よさん",
    "english": "estimate; budget",
    "nepali": ""
  },
  {
    "id": "n3-13",
    "kanji": "事件",
    "kana": "じけん",
    "romaji": "じけん",
    "english": "event; incident; case (usually negative)",
    "nepali": ""
  },
  {
    "id": "n3-14",
    "kanji": "人間",
    "kana": "にんげん",
    "romaji": "にんげん",
    "english": "human being; person",
    "nepali": ""
  },
  {
    "id": "n3-15",
    "kanji": "人類",
    "kana": "じんるい",
    "romaji": "じんるい",
    "english": "mankind; humanity",
    "nepali": ""
  },
  {
    "id": "n3-16",
    "kanji": "以前",
    "kana": "いぜん",
    "romaji": "いぜん",
    "english": "since; before; previous",
    "nepali": ""
  },
  {
    "id": "n3-17",
    "kanji": "休憩",
    "kana": "きゅうけい",
    "romaji": "きゅうけい",
    "english": "rest; break",
    "nepali": ""
  },
  {
    "id": "n3-18",
    "kanji": "休暇",
    "kana": "きゅうか",
    "romaji": "きゅうか",
    "english": "holiday; day off",
    "nepali": ""
  },
  {
    "id": "n3-19",
    "kanji": "会員",
    "kana": "かいいん",
    "romaji": "かいいん",
    "english": "member; the membership",
    "nepali": ""
  },
  {
    "id": "n3-20",
    "kanji": "伝統",
    "kana": "でんとう",
    "romaji": "でんとう",
    "english": "tradition; convention",
    "nepali": ""
  },
  {
    "id": "n3-21",
    "kanji": "伸びる",
    "kana": "のびる",
    "romaji": "のびる",
    "english": "to stretch; to extend; to grow",
    "nepali": ""
  },
  {
    "id": "n3-22",
    "kanji": "似合う",
    "kana": "にあう",
    "romaji": "にあう",
    "english": "to suit; to match",
    "nepali": ""
  },
  {
    "id": "n3-23",
    "kanji": "住民",
    "kana": "じゅうみん",
    "romaji": "じゅうみん",
    "english": "inhabitant; resident",
    "nepali": ""
  },
  {
    "id": "n3-24",
    "kanji": "作品",
    "kana": "さくひん",
    "romaji": "さくひん",
    "english": "work; production (book, film, etc.)",
    "nepali": ""
  },
  {
    "id": "n3-25",
    "kanji": "作業",
    "kana": "さぎょう",
    "romaji": "さぎょう",
    "english": "work; operation; manufacturing",
    "nepali": ""
  },
  {
    "id": "n3-26",
    "kanji": "保存",
    "kana": "ほぞん",
    "romaji": "ほぞん",
    "english": "saving; storage; maintenance",
    "nepali": ""
  },
  {
    "id": "n3-27",
    "kanji": "信頼",
    "kana": "しんらい",
    "romaji": "しんらい",
    "english": "reliance; confidence",
    "nepali": ""
  },
  {
    "id": "n3-28",
    "kanji": "俳優",
    "kana": "はいゆう",
    "romaji": "はいゆう",
    "english": "actor",
    "nepali": ""
  },
  {
    "id": "n3-29",
    "kanji": "優勝",
    "kana": "ゆうしょう",
    "romaji": "ゆうしょう",
    "english": "overall victory; championship",
    "nepali": ""
  },
  {
    "id": "n3-30",
    "kanji": "優秀",
    "kana": "ゆうしゅう",
    "romaji": "ゆうしゅう",
    "english": "superiority; excellence",
    "nepali": ""
  },
  {
    "id": "n3-31",
    "kanji": "先日",
    "kana": "せんじつ",
    "romaji": "せんじつ",
    "english": "the other day; a few days ago",
    "nepali": ""
  },
  {
    "id": "n3-32",
    "kanji": "全て",
    "kana": "すべて",
    "romaji": "すべて",
    "english": "everything; all; entirely; completely",
    "nepali": ""
  },
  {
    "id": "n3-33",
    "kanji": "全体",
    "kana": "ぜんたい",
    "romaji": "ぜんたい",
    "english": "whole; entirety",
    "nepali": ""
  },
  {
    "id": "n3-34",
    "kanji": "全員",
    "kana": "ぜんいん",
    "romaji": "ぜんいん",
    "english": "all members; everyone",
    "nepali": ""
  },
  {
    "id": "n3-35",
    "kanji": "共通",
    "kana": "きょうつう",
    "romaji": "きょうつう",
    "english": "common; shared",
    "nepali": ""
  },
  {
    "id": "n3-36",
    "kanji": "内容",
    "kana": "ないよう",
    "romaji": "ないよう",
    "english": "contents; substance; details",
    "nepali": ""
  },
  {
    "id": "n3-37",
    "kanji": "冗談",
    "kana": "じょうだん",
    "romaji": "じょうだん",
    "english": "joke",
    "nepali": ""
  },
  {
    "id": "n3-38",
    "kanji": "分",
    "kana": "ぶん",
    "romaji": "ぶん",
    "english": "part; segment; share",
    "nepali": ""
  },
  {
    "id": "n3-39",
    "kanji": "～分の～",
    "kana": "～ぶんの～",
    "romaji": "～ぶんの～",
    "english": "expresses a fraction/portion where the first ～ is the denominator",
    "nepali": ""
  },
  {
    "id": "n3-40",
    "kanji": "分野",
    "kana": "ぶんや",
    "romaji": "ぶんや",
    "english": "field; area; realm",
    "nepali": ""
  },
  {
    "id": "n3-41",
    "kanji": "刑事",
    "kana": "けいじ",
    "romaji": "けいじ",
    "english": "(police) detective",
    "nepali": ""
  },
  {
    "id": "n3-42",
    "kanji": "到着",
    "kana": "とうちゃく",
    "romaji": "とうちゃく",
    "english": "arrival",
    "nepali": ""
  },
  {
    "id": "n3-43",
    "kanji": "努力",
    "kana": "どりょく",
    "romaji": "どりょく",
    "english": "effort; exertion; hard work",
    "nepali": ""
  },
  {
    "id": "n3-44",
    "kanji": "効果",
    "kana": "こうか",
    "romaji": "こうか",
    "english": "effect; efficacy",
    "nepali": ""
  },
  {
    "id": "n3-45",
    "kanji": "協力",
    "kana": "きょうりょく",
    "romaji": "きょうりょく",
    "english": "cooperation; collaboration",
    "nepali": ""
  },
  {
    "id": "n3-46",
    "kanji": "単語",
    "kana": "たんご",
    "romaji": "たんご",
    "english": "word; vocabulary",
    "nepali": ""
  },
  {
    "id": "n3-47",
    "kanji": "占める",
    "kana": "しめる",
    "romaji": "しめる",
    "english": "to occupy; to hold; to comprise; to make up",
    "nepali": ""
  },
  {
    "id": "n3-48",
    "kanji": "印象",
    "kana": "いんしょう",
    "romaji": "いんしょう",
    "english": "impression",
    "nepali": ""
  },
  {
    "id": "n3-49",
    "kanji": "友人",
    "kana": "ゆうじん",
    "romaji": "ゆうじん",
    "english": "friend",
    "nepali": ""
  },
  {
    "id": "n3-50",
    "kanji": "双子",
    "kana": "ふたご",
    "romaji": "ふたご",
    "english": "twins",
    "nepali": ""
  },
  {
    "id": "n3-51",
    "kanji": "収穫",
    "kana": "しゅうかく",
    "romaji": "しゅうかく",
    "english": "harvest; crop",
    "nepali": ""
  },
  {
    "id": "n3-52",
    "kanji": "叫ぶ",
    "kana": "さけぶ",
    "romaji": "さけぶ",
    "english": "to shout; to cry; to yell; to clamour",
    "nepali": ""
  },
  {
    "id": "n3-53",
    "kanji": "同僚",
    "kana": "どうりょう",
    "romaji": "どうりょう",
    "english": "coworker; colleague",
    "nepali": ""
  },
  {
    "id": "n3-54",
    "kanji": "味方",
    "kana": "みかた",
    "romaji": "みかた",
    "english": "friend; ally; supporter",
    "nepali": ""
  },
  {
    "id": "n3-55",
    "kanji": "品",
    "kana": "しな",
    "romaji": "しな",
    "english": "article; item; good",
    "nepali": ""
  },
  {
    "id": "n3-56",
    "kanji": "ただ",
    "kana": "ただ",
    "romaji": "ただ",
    "english": "ordinary; common; usual | only; merely | but; however",
    "nepali": ""
  },
  {
    "id": "n3-57",
    "kanji": "商品",
    "kana": "しょうひん",
    "romaji": "しょうひん",
    "english": "good; merchandise",
    "nepali": ""
  },
  {
    "id": "n3-58",
    "kanji": "国民",
    "kana": "こくみん",
    "romaji": "こくみん",
    "english": "people (of a country); citizen",
    "nepali": ""
  },
  {
    "id": "n3-59",
    "kanji": "地域",
    "kana": "ちいき",
    "romaji": "ちいき",
    "english": "area; region",
    "nepali": ""
  },
  {
    "id": "n3-60",
    "kanji": "地方",
    "kana": "ちほう",
    "romaji": "ちほう",
    "english": "district; region | countryside; rural area",
    "nepali": ""
  },
  {
    "id": "n3-61",
    "kanji": "報告",
    "kana": "ほうこく",
    "romaji": "ほうこく",
    "english": "report; information",
    "nepali": ""
  },
  {
    "id": "n3-62",
    "kanji": "変更",
    "kana": "へんこう",
    "romaji": "へんこう",
    "english": "change; alteration",
    "nepali": ""
  },
  {
    "id": "n3-63",
    "kanji": "夜中",
    "kana": "よなか",
    "romaji": "よなか",
    "english": "middle of the night",
    "nepali": ""
  },
  {
    "id": "n3-64",
    "kanji": "夢中",
    "kana": "むちゅう",
    "romaji": "むちゅう",
    "english": "daze; engrossment; obsessed with; hooked on",
    "nepali": ""
  },
  {
    "id": "n3-65",
    "kanji": "大統領",
    "kana": "だいとうりょう",
    "romaji": "だいとうりょう",
    "english": "president (of a country)",
    "nepali": ""
  },
  {
    "id": "n3-66",
    "kanji": "太陽",
    "kana": "たいよう",
    "romaji": "たいよう",
    "english": "sun",
    "nepali": ""
  },
  {
    "id": "n3-67",
    "kanji": "失う",
    "kana": "うしなう",
    "romaji": "うしなう",
    "english": "to lose",
    "nepali": ""
  },
  {
    "id": "n3-68",
    "kanji": "契約",
    "kana": "けいやく",
    "romaji": "けいやく",
    "english": "contract",
    "nepali": ""
  },
  {
    "id": "n3-69",
    "kanji": "奥",
    "kana": "おく",
    "romaji": "おく",
    "english": "inside; interior; depths; back",
    "nepali": ""
  },
  {
    "id": "n3-70",
    "kanji": "好み",
    "kana": "このみ",
    "romaji": "このみ",
    "english": "liking; taste",
    "nepali": ""
  },
  {
    "id": "n3-71",
    "kanji": "委員",
    "kana": "いいん",
    "romaji": "いいん",
    "english": "committee member",
    "nepali": ""
  },
  {
    "id": "n3-72",
    "kanji": "嫌う",
    "kana": "きらう",
    "romaji": "きらう",
    "english": "to hate; to dislike",
    "nepali": ""
  },
  {
    "id": "n3-73",
    "kanji": "孫",
    "kana": "まご",
    "romaji": "まご",
    "english": "grandchild",
    "nepali": ""
  },
  {
    "id": "n3-74",
    "kanji": "守る",
    "kana": "まもる",
    "romaji": "まもる",
    "english": "to protect; to guard; to uphold; to follow",
    "nepali": ""
  },
  {
    "id": "n3-75",
    "kanji": "完成",
    "kana": "かんせい",
    "romaji": "かんせい",
    "english": "completion; accomplishment",
    "nepali": ""
  },
  {
    "id": "n3-76",
    "kanji": "実際",
    "kana": "じっさい",
    "romaji": "じっさい",
    "english": "practicality; reality; actual",
    "nepali": ""
  },
  {
    "id": "n3-77",
    "kanji": "家事",
    "kana": "かじ",
    "romaji": "かじ",
    "english": "housework; chores",
    "nepali": ""
  },
  {
    "id": "n3-78",
    "kanji": "家賃",
    "kana": "やちん",
    "romaji": "やちん",
    "english": "rent",
    "nepali": ""
  },
  {
    "id": "n3-79",
    "kanji": "宿泊",
    "kana": "しゅくはく",
    "romaji": "しゅくはく",
    "english": "lodging",
    "nepali": ""
  },
  {
    "id": "n3-80",
    "kanji": "就職",
    "kana": "しゅうしょく",
    "romaji": "しゅうしょく",
    "english": "finding employment",
    "nepali": ""
  },
  {
    "id": "n3-81",
    "kanji": "希望",
    "kana": "きぼう",
    "romaji": "きぼう",
    "english": "request; hope; aspiration",
    "nepali": ""
  },
  {
    "id": "n3-82",
    "kanji": "常識",
    "kana": "じょうしき",
    "romaji": "じょうしき",
    "english": "common sense",
    "nepali": ""
  },
  {
    "id": "n3-83",
    "kanji": "幅",
    "kana": "はば",
    "romaji": "はば",
    "english": "width; range; gap; difference",
    "nepali": ""
  },
  {
    "id": "n3-84",
    "kanji": "平和",
    "kana": "へいわ",
    "romaji": "へいわ",
    "english": "peace; harmony",
    "nepali": ""
  },
  {
    "id": "n3-85",
    "kanji": "平均",
    "kana": "へいきん",
    "romaji": "へいきん",
    "english": "average; mean; balance; equilibrium",
    "nepali": ""
  },
  {
    "id": "n3-86",
    "kanji": "年月",
    "kana": "としつき、ねんげつ",
    "romaji": "としつき、ねんげつ",
    "english": "months and years",
    "nepali": ""
  },
  {
    "id": "n3-87",
    "kanji": "年齢",
    "kana": "ねんれい",
    "romaji": "ねんれい",
    "english": "age; years",
    "nepali": ""
  },
  {
    "id": "n3-88",
    "kanji": "広がる",
    "kana": "ひろがる",
    "romaji": "ひろがる",
    "english": "to spread (out); to extend",
    "nepali": ""
  },
  {
    "id": "n3-89",
    "kanji": "建設",
    "kana": "けんせつ",
    "romaji": "けんせつ",
    "english": "construction; establishment",
    "nepali": ""
  },
  {
    "id": "n3-90",
    "kanji": "影響",
    "kana": "えいきょう",
    "romaji": "えいきょう",
    "english": "influence; effect",
    "nepali": ""
  },
  {
    "id": "n3-91",
    "kanji": "役",
    "kana": "やく",
    "romaji": "やく",
    "english": "use; service; role",
    "nepali": ""
  },
  {
    "id": "n3-92",
    "kanji": "得る",
    "kana": "える",
    "romaji": "える",
    "english": "to get; to obtain; to win",
    "nepali": ""
  },
  {
    "id": "n3-93",
    "kanji": "得意",
    "kana": "とくい",
    "romaji": "とくい",
    "english": "one's strong point; one's forte",
    "nepali": ""
  },
  {
    "id": "n3-94",
    "kanji": "徹夜",
    "kana": "てつや",
    "romaji": "てつや",
    "english": "all night; sleepless night",
    "nepali": ""
  },
  {
    "id": "n3-95",
    "kanji": "快適",
    "kana": "かいてき",
    "romaji": "かいてき",
    "english": "pleasant; comfortable",
    "nepali": ""
  },
  {
    "id": "n3-96",
    "kanji": "急に",
    "kana": "きゅうに",
    "romaji": "きゅうに",
    "english": "quickly; suddenly",
    "nepali": ""
  },
  {
    "id": "n3-97",
    "kanji": "性格",
    "kana": "せいかく",
    "romaji": "せいかく",
    "english": "character; personality",
    "nepali": ""
  },
  {
    "id": "n3-98",
    "kanji": "悩む",
    "kana": "なやむ",
    "romaji": "なやむ",
    "english": "to be worried; to be uncertain",
    "nepali": ""
  },
  {
    "id": "n3-99",
    "kanji": "悪口",
    "kana": "わるくち、あっこう",
    "romaji": "わるくち、あっこう",
    "english": "insult; bad mouth",
    "nepali": ""
  },
  {
    "id": "n3-100",
    "kanji": "情報",
    "kana": "じょうほう",
    "romaji": "じょうほう",
    "english": "information; news; data",
    "nepali": ""
  },
  {
    "id": "n3-101",
    "kanji": "想像",
    "kana": "そうぞう",
    "romaji": "そうぞう",
    "english": "imagination; guess",
    "nepali": ""
  },
  {
    "id": "n3-102",
    "kanji": "愛情",
    "kana": "あいじょう",
    "romaji": "あいじょう",
    "english": "love; affection",
    "nepali": ""
  },
  {
    "id": "n3-103",
    "kanji": "感謝",
    "kana": "かんしゃ",
    "romaji": "かんしゃ",
    "english": "thanks; gratitude",
    "nepali": ""
  },
  {
    "id": "n3-104",
    "kanji": "態度",
    "kana": "たいど",
    "romaji": "たいど",
    "english": "attitude",
    "nepali": ""
  },
  {
    "id": "n3-105",
    "kanji": "成功",
    "kana": "せいこう",
    "romaji": "せいこう",
    "english": "success",
    "nepali": ""
  },
  {
    "id": "n3-106",
    "kanji": "成績",
    "kana": "せいせき",
    "romaji": "せいせき",
    "english": "results; grades",
    "nepali": ""
  },
  {
    "id": "n3-107",
    "kanji": "戻す",
    "kana": "もどす",
    "romaji": "もどす",
    "english": "to return; to restore",
    "nepali": ""
  },
  {
    "id": "n3-108",
    "kanji": "手伝い",
    "kana": "てつだい",
    "romaji": "てつだい",
    "english": "help",
    "nepali": ""
  },
  {
    "id": "n3-109",
    "kanji": "手術",
    "kana": "しゅじゅつ",
    "romaji": "しゅじゅつ",
    "english": "surgery",
    "nepali": ""
  },
  {
    "id": "n3-110",
    "kanji": "投票",
    "kana": "とうひょう",
    "romaji": "とうひょう",
    "english": "voting",
    "nepali": ""
  },
  {
    "id": "n3-111",
    "kanji": "抜ける",
    "kana": "ぬける",
    "romaji": "ぬける",
    "english": "to come out; to fall out; to be omitted",
    "nepali": ""
  },
  {
    "id": "n3-112",
    "kanji": "抱く",
    "kana": "いだく、だく",
    "romaji": "いだく、だく",
    "english": "to embrace; to hug",
    "nepali": ""
  },
  {
    "id": "n3-113",
    "kanji": "指導",
    "kana": "しどう",
    "romaji": "しどう",
    "english": "guidance; instruction",
    "nepali": ""
  },
  {
    "id": "n3-114",
    "kanji": "描く",
    "kana": "えがく",
    "romaji": "えがく",
    "english": "to draw; to paint; to sketch",
    "nepali": ""
  },
  {
    "id": "n3-115",
    "kanji": "援助",
    "kana": "えんじょ",
    "romaji": "えんじょ",
    "english": "aid; support",
    "nepali": ""
  },
  {
    "id": "n3-116",
    "kanji": "操作",
    "kana": "そうさ",
    "romaji": "そうさ",
    "english": "operation; management",
    "nepali": ""
  },
  {
    "id": "n3-117",
    "kanji": "支払う",
    "kana": "しはらう",
    "romaji": "しはらう",
    "english": "to pay",
    "nepali": ""
  },
  {
    "id": "n3-118",
    "kanji": "攻撃",
    "kana": "こうげき",
    "romaji": "こうげき",
    "english": "attack; strike; offensive",
    "nepali": ""
  },
  {
    "id": "n3-119",
    "kanji": "故郷",
    "kana": "こきょう、ふるさと",
    "romaji": "こきょう、ふるさと",
    "english": "home town; birthplace",
    "nepali": ""
  },
  {
    "id": "n3-120",
    "kanji": "教師",
    "kana": "きょうし",
    "romaji": "きょうし",
    "english": "teacher (in school/classroom)",
    "nepali": ""
  },
  {
    "id": "n3-121",
    "kanji": "数（かず）",
    "kana": "かず",
    "romaji": "かず",
    "english": "number; amount",
    "nepali": ""
  },
  {
    "id": "n3-122",
    "kanji": "数（すう）",
    "kana": "すう",
    "romaji": "すう",
    "english": "several; a few | quantity; amount",
    "nepali": ""
  },
  {
    "id": "n3-123",
    "kanji": "数える",
    "kana": "かぞえる",
    "romaji": "かぞえる",
    "english": "to count",
    "nepali": ""
  },
  {
    "id": "n3-124",
    "kanji": "文句",
    "kana": "もんく",
    "romaji": "もんく",
    "english": "complaint",
    "nepali": ""
  },
  {
    "id": "n3-125",
    "kanji": "断る",
    "kana": "ことわる",
    "romaji": "ことわる",
    "english": "to decline; to refuse",
    "nepali": ""
  },
  {
    "id": "n3-126",
    "kanji": "新鮮",
    "kana": "しんせん",
    "romaji": "しんせん",
    "english": "fresh",
    "nepali": ""
  },
  {
    "id": "n3-127",
    "kanji": "方々",
    "kana": "かたがた",
    "romaji": "かたがた",
    "english": "(hon) they; you (plural people)",
    "nepali": ""
  },
  {
    "id": "n3-128",
    "kanji": "方法",
    "kana": "ほうほう",
    "romaji": "ほうほう",
    "english": "method; way; process",
    "nepali": ""
  },
  {
    "id": "n3-129",
    "kanji": "時期",
    "kana": "じき",
    "romaji": "じき",
    "english": "time; season",
    "nepali": ""
  },
  {
    "id": "n3-130",
    "kanji": "最高",
    "kana": "さいこう",
    "romaji": "さいこう",
    "english": "most; highest; best; finest",
    "nepali": ""
  },
  {
    "id": "n3-131",
    "kanji": "期待",
    "kana": "きたい",
    "romaji": "きたい",
    "english": "expectation; anticipation",
    "nepali": ""
  },
  {
    "id": "n3-132",
    "kanji": "条件",
    "kana": "じょうけん",
    "romaji": "じょうけん",
    "english": "condition; requirement; prerequisite",
    "nepali": ""
  },
  {
    "id": "n3-133",
    "kanji": "栄養",
    "kana": "えいよう",
    "romaji": "えいよう",
    "english": "nutrition",
    "nepali": ""
  },
  {
    "id": "n3-134",
    "kanji": "根",
    "kana": "ね",
    "romaji": "ね",
    "english": "root (of a plant, tooth, hair, etc.)",
    "nepali": ""
  },
  {
    "id": "n3-135",
    "kanji": "検査",
    "kana": "けんさ",
    "romaji": "けんさ",
    "english": "inspection; examination",
    "nepali": ""
  },
  {
    "id": "n3-136",
    "kanji": "極",
    "kana": "きょく",
    "romaji": "きょく",
    "english": "extreme; zenith; pole",
    "nepali": ""
  },
  {
    "id": "n3-137",
    "kanji": "様子",
    "kana": "ようす",
    "romaji": "ようす",
    "english": "state; situation; appearance",
    "nepali": ""
  },
  {
    "id": "n3-138",
    "kanji": "機嫌",
    "kana": "きげん",
    "romaji": "きげん",
    "english": "mood; spirits | be in a good mood",
    "nepali": ""
  },
  {
    "id": "n3-139",
    "kanji": "機能",
    "kana": "きのう",
    "romaji": "きのう",
    "english": "function; feature",
    "nepali": ""
  },
  {
    "id": "n3-140",
    "kanji": "欠席",
    "kana": "けっせき",
    "romaji": "けっせき",
    "english": "absence; non-attendance",
    "nepali": ""
  },
  {
    "id": "n3-141",
    "kanji": "歌手",
    "kana": "かしゅ",
    "romaji": "かしゅ",
    "english": "singer",
    "nepali": ""
  },
  {
    "id": "n3-142",
    "kanji": "正直",
    "kana": "しょうじき",
    "romaji": "しょうじき",
    "english": "honesty; frankness",
    "nepali": ""
  },
  {
    "id": "n3-143",
    "kanji": "正確",
    "kana": "せいかく",
    "romaji": "せいかく",
    "english": "accurate; correct; exact",
    "nepali": ""
  },
  {
    "id": "n3-144",
    "kanji": "残り",
    "kana": "のこり",
    "romaji": "のこり",
    "english": "remaining; left-over",
    "nepali": ""
  },
  {
    "id": "n3-145",
    "kanji": "気に入る",
    "kana": "きにいる",
    "romaji": "きにいる",
    "english": "to be pleased with",
    "nepali": ""
  },
  {
    "id": "n3-146",
    "kanji": "気候",
    "kana": "きこう",
    "romaji": "きこう",
    "english": "climate",
    "nepali": ""
  },
  {
    "id": "n3-147",
    "kanji": "決心",
    "kana": "けっしん",
    "romaji": "けっしん",
    "english": "decision; resolution",
    "nepali": ""
  },
  {
    "id": "n3-148",
    "kanji": "泥",
    "kana": "どろ",
    "romaji": "どろ",
    "english": "mud; slush",
    "nepali": ""
  },
  {
    "id": "n3-149",
    "kanji": "注ぐ",
    "kana": "そそぐ",
    "romaji": "そそぐ",
    "english": "to pour (into a container); to water (e.g. plants) | to flow into (e.g. a river)",
    "nepali": ""
  },
  {
    "id": "n3-150",
    "kanji": "注文",
    "kana": "ちゅうもん",
    "romaji": "ちゅうもん",
    "english": "order; request",
    "nepali": ""
  },
  {
    "id": "n3-151",
    "kanji": "流行",
    "kana": "りゅうこう",
    "romaji": "りゅうこう",
    "english": "fashion; fad",
    "nepali": ""
  },
  {
    "id": "n3-152",
    "kanji": "涙",
    "kana": "なみだ",
    "romaji": "なみだ",
    "english": "tears",
    "nepali": ""
  },
  {
    "id": "n3-153",
    "kanji": "深刻",
    "kana": "しんこく",
    "romaji": "しんこく",
    "english": "serious; grave",
    "nepali": ""
  },
  {
    "id": "n3-154",
    "kanji": "減る",
    "kana": "へる",
    "romaji": "へる",
    "english": "to decrease (in size or number); to diminish",
    "nepali": ""
  },
  {
    "id": "n3-155",
    "kanji": "温暖",
    "kana": "おんだん",
    "romaji": "おんだん",
    "english": "warm; mild; temperate",
    "nepali": ""
  },
  {
    "id": "n3-156",
    "kanji": "満足",
    "kana": "まんぞく",
    "romaji": "まんぞく",
    "english": "satisfaction; contentment; sufficient",
    "nepali": ""
  },
  {
    "id": "n3-157",
    "kanji": "演奏",
    "kana": "えんそう",
    "romaji": "えんそう",
    "english": "(musical) performance",
    "nepali": ""
  },
  {
    "id": "n3-158",
    "kanji": "演技",
    "kana": "えんぎ",
    "romaji": "えんぎ",
    "english": "acting; performance",
    "nepali": ""
  },
  {
    "id": "n3-159",
    "kanji": "激しい",
    "kana": "はげしい",
    "romaji": "はげしい",
    "english": "intense; fierce; vehement",
    "nepali": ""
  },
  {
    "id": "n3-160",
    "kanji": "無料",
    "kana": "むりょう",
    "romaji": "むりょう",
    "english": "free; no charge",
    "nepali": ""
  },
  {
    "id": "n3-161",
    "kanji": "無視",
    "kana": "むし",
    "romaji": "むし",
    "english": "disregarding; ignoring",
    "nepali": ""
  },
  {
    "id": "n3-162",
    "kanji": "無駄",
    "kana": "むだ",
    "romaji": "むだ",
    "english": "uselessness; pointlessness",
    "nepali": ""
  },
  {
    "id": "n3-163",
    "kanji": "燃える",
    "kana": "もえる",
    "romaji": "もえる",
    "english": "to burn",
    "nepali": ""
  },
  {
    "id": "n3-164",
    "kanji": "物理",
    "kana": "ぶつり",
    "romaji": "ぶつり",
    "english": "physics",
    "nepali": ""
  },
  {
    "id": "n3-165",
    "kanji": "犯人",
    "kana": "はんにん",
    "romaji": "はんにん",
    "english": "criminal",
    "nepali": ""
  },
  {
    "id": "n3-166",
    "kanji": "状態",
    "kana": "じょうたい",
    "romaji": "じょうたい",
    "english": "current status; condition",
    "nepali": ""
  },
  {
    "id": "n3-167",
    "kanji": "独身",
    "kana": "どくしん",
    "romaji": "どくしん",
    "english": "single; unmarried",
    "nepali": ""
  },
  {
    "id": "n3-168",
    "kanji": "猿",
    "kana": "さる",
    "romaji": "さる",
    "english": "monkey",
    "nepali": ""
  },
  {
    "id": "n3-169",
    "kanji": "現在",
    "kana": "げんざい",
    "romaji": "げんざい",
    "english": "current; present time",
    "nepali": ""
  },
  {
    "id": "n3-170",
    "kanji": "現場",
    "kana": "げんば",
    "romaji": "げんば",
    "english": "actual spot; actual site; shop/factory floor",
    "nepali": ""
  },
  {
    "id": "n3-171",
    "kanji": "現実",
    "kana": "げんじつ",
    "romaji": "げんじつ",
    "english": "reality; actuality",
    "nepali": ""
  },
  {
    "id": "n3-172",
    "kanji": "球",
    "kana": "きゅう",
    "romaji": "きゅう",
    "english": "sphere; (baseball) counter for balls",
    "nepali": ""
  },
  {
    "id": "n3-173",
    "kanji": "理想",
    "kana": "りそう",
    "romaji": "りそう",
    "english": "ideal",
    "nepali": ""
  },
  {
    "id": "n3-174",
    "kanji": "理解",
    "kana": "りかい",
    "romaji": "りかい",
    "english": "understanding; comprehension",
    "nepali": ""
  },
  {
    "id": "n3-175",
    "kanji": "生物",
    "kana": "せいぶつ",
    "romaji": "せいぶつ",
    "english": "living thing; creature; life",
    "nepali": ""
  },
  {
    "id": "n3-176",
    "kanji": "画家",
    "kana": "がか",
    "romaji": "がか",
    "english": "painter",
    "nepali": ""
  },
  {
    "id": "n3-177",
    "kanji": "異常",
    "kana": "いじょう",
    "romaji": "いじょう",
    "english": "abnormality; strangeness",
    "nepali": ""
  },
  {
    "id": "n3-178",
    "kanji": "発車",
    "kana": "はっしゃ",
    "romaji": "はっしゃ",
    "english": "departure; leaving",
    "nepali": ""
  },
  {
    "id": "n3-179",
    "kanji": "登山",
    "kana": "とざん",
    "romaji": "とざん",
    "english": "mountain climbing",
    "nepali": ""
  },
  {
    "id": "n3-180",
    "kanji": "盛り",
    "kana": "さかり",
    "romaji": "さかり",
    "english": "height (e.g. of summer); prime (of one's life)",
    "nepali": ""
  },
  {
    "id": "n3-181",
    "kanji": "目的",
    "kana": "もくてき",
    "romaji": "もくてき",
    "english": "goal; objective",
    "nepali": ""
  },
  {
    "id": "n3-182",
    "kanji": "真似",
    "kana": "まね",
    "romaji": "まね",
    "english": "imitating; copying",
    "nepali": ""
  },
  {
    "id": "n3-183",
    "kanji": "真剣",
    "kana": "しんけん",
    "romaji": "しんけん",
    "english": "serious; earnest",
    "nepali": ""
  },
  {
    "id": "n3-184",
    "kanji": "確かめる",
    "kana": "たしかめる",
    "romaji": "たしかめる",
    "english": "to check; to confirm",
    "nepali": ""
  },
  {
    "id": "n3-185",
    "kanji": "確認",
    "kana": "かくにん",
    "romaji": "かくにん",
    "english": "confirmation; verification",
    "nepali": ""
  },
  {
    "id": "n3-186",
    "kanji": "禁煙",
    "kana": "きんえん",
    "romaji": "きんえん",
    "english": "\"No Smoking\"; quitting smoking",
    "nepali": ""
  },
  {
    "id": "n3-187",
    "kanji": "科目",
    "kana": "かもく",
    "romaji": "かもく",
    "english": "(school) subject; curriculum",
    "nepali": ""
  },
  {
    "id": "n3-188",
    "kanji": "秘密",
    "kana": "ひみつ",
    "romaji": "ひみつ",
    "english": "secret",
    "nepali": ""
  },
  {
    "id": "n3-189",
    "kanji": "突然",
    "kana": "とつぜん",
    "romaji": "とつぜん",
    "english": "abrupt; sudden; unexpected",
    "nepali": ""
  },
  {
    "id": "n3-190",
    "kanji": "管理",
    "kana": "かんり",
    "romaji": "かんり",
    "english": "control; management (e.g. of a business)",
    "nepali": ""
  },
  {
    "id": "n3-191",
    "kanji": "綿",
    "kana": "めん",
    "romaji": "めん",
    "english": "cotton",
    "nepali": ""
  },
  {
    "id": "n3-192",
    "kanji": "緊張",
    "kana": "きんちょう",
    "romaji": "きんちょう",
    "english": "nervousness; stress",
    "nepali": ""
  },
  {
    "id": "n3-193",
    "kanji": "縁",
    "kana": "ふち",
    "romaji": "ふち",
    "english": "edge; rim",
    "nepali": ""
  },
  {
    "id": "n3-194",
    "kanji": "肌",
    "kana": "はだ",
    "romaji": "はだ",
    "english": "skin",
    "nepali": ""
  },
  {
    "id": "n3-195",
    "kanji": "胃",
    "kana": "い",
    "romaji": "い",
    "english": "stomach",
    "nepali": ""
  },
  {
    "id": "n3-196",
    "kanji": "腰",
    "kana": "こし",
    "romaji": "こし",
    "english": "lower back",
    "nepali": ""
  },
  {
    "id": "n3-197",
    "kanji": "自然",
    "kana": "しぜん",
    "romaji": "しぜん",
    "english": "natural; nature",
    "nepali": ""
  },
  {
    "id": "n3-198",
    "kanji": "舞台",
    "kana": "ぶたい",
    "romaji": "ぶたい",
    "english": "stage (theatre)",
    "nepali": ""
  },
  {
    "id": "n3-199",
    "kanji": "被害",
    "kana": "ひがい",
    "romaji": "ひがい",
    "english": "damage; injury",
    "nepali": ""
  },
  {
    "id": "n3-200",
    "kanji": "裁判",
    "kana": "さいばん",
    "romaji": "さいばん",
    "english": "trial; judgement",
    "nepali": ""
  },
  {
    "id": "n3-201",
    "kanji": "製品",
    "kana": "せいひん",
    "romaji": "せいひん",
    "english": "manufactured goods; product",
    "nepali": ""
  },
  {
    "id": "n3-202",
    "kanji": "要求",
    "kana": "ようきゅう",
    "romaji": "ようきゅう",
    "english": "demand; request; requirement",
    "nepali": ""
  },
  {
    "id": "n3-203",
    "kanji": "親友",
    "kana": "しんゆう",
    "romaji": "しんゆう",
    "english": "close friend",
    "nepali": ""
  },
  {
    "id": "n3-204",
    "kanji": "観客",
    "kana": "かんきゃく",
    "romaji": "かんきゃく",
    "english": "spectator",
    "nepali": ""
  },
  {
    "id": "n3-205",
    "kanji": "解く",
    "kana": "とく",
    "romaji": "とく",
    "english": "to solve; to unravel; to untie",
    "nepali": ""
  },
  {
    "id": "n3-206",
    "kanji": "解ける",
    "kana": "とける",
    "romaji": "とける",
    "english": "to be solved; to be untied",
    "nepali": ""
  },
  {
    "id": "n3-207",
    "kanji": "設備",
    "kana": "せつび",
    "romaji": "せつび",
    "english": "equipment; facilities",
    "nepali": ""
  },
  {
    "id": "n3-208",
    "kanji": "許す",
    "kana": "ゆるす",
    "romaji": "ゆるす",
    "english": "to permit; to allow; to forgive",
    "nepali": ""
  },
  {
    "id": "n3-209",
    "kanji": "証明",
    "kana": "しょうめい",
    "romaji": "しょうめい",
    "english": "proof; verification; certification",
    "nepali": ""
  },
  {
    "id": "n3-210",
    "kanji": "評判",
    "kana": "ひょうばん",
    "romaji": "ひょうばん",
    "english": "reputation; popularity",
    "nepali": ""
  },
  {
    "id": "n3-211",
    "kanji": "試す",
    "kana": "ためす",
    "romaji": "ためす",
    "english": "to test; to try out",
    "nepali": ""
  },
  {
    "id": "n3-212",
    "kanji": "語る",
    "kana": "かたる",
    "romaji": "かたる",
    "english": "to talk about; to speak of",
    "nepali": ""
  },
  {
    "id": "n3-213",
    "kanji": "誤解",
    "kana": "ごかい",
    "romaji": "ごかい",
    "english": "misunderstanding",
    "nepali": ""
  },
  {
    "id": "n3-214",
    "kanji": "読書",
    "kana": "どくしょ",
    "romaji": "どくしょ",
    "english": "reading (as a hobby)",
    "nepali": ""
  },
  {
    "id": "n3-215",
    "kanji": "調査",
    "kana": "ちょうさ",
    "romaji": "ちょうさ",
    "english": "survey",
    "nepali": ""
  },
  {
    "id": "n3-216",
    "kanji": "論文",
    "kana": "ろんぶん",
    "romaji": "ろんぶん",
    "english": "thesis; essay",
    "nepali": ""
  },
  {
    "id": "n3-217",
    "kanji": "豪華",
    "kana": "ごうか",
    "romaji": "ごうか",
    "english": "wonderful; extravagant; splendid",
    "nepali": ""
  },
  {
    "id": "n3-218",
    "kanji": "贈る",
    "kana": "おくる",
    "romaji": "おくる",
    "english": "to give (as a gift); to present",
    "nepali": ""
  },
  {
    "id": "n3-219",
    "kanji": "～軒",
    "kana": "～けん",
    "romaji": "～けん",
    "english": "counter for houses",
    "nepali": ""
  },
  {
    "id": "n3-220",
    "kanji": "軒",
    "kana": "のき",
    "romaji": "のき",
    "english": "eaves",
    "nepali": ""
  },
  {
    "id": "n3-221",
    "kanji": "転ぶ",
    "kana": "ころぶ",
    "romaji": "ころぶ",
    "english": "to fall down; to fall over",
    "nepali": ""
  },
  {
    "id": "n3-222",
    "kanji": "農家",
    "kana": "のうか",
    "romaji": "のうか",
    "english": "farmer",
    "nepali": ""
  },
  {
    "id": "n3-223",
    "kanji": "迷子",
    "kana": "まいご",
    "romaji": "まいご",
    "english": "lost child",
    "nepali": ""
  },
  {
    "id": "n3-224",
    "kanji": "連続",
    "kana": "れんぞく",
    "romaji": "れんぞく",
    "english": "occurring in succession; continuing",
    "nepali": ""
  },
  {
    "id": "n3-225",
    "kanji": "進める",
    "kana": "すすめる",
    "romaji": "すすめる",
    "english": "to advance; to progress",
    "nepali": ""
  },
  {
    "id": "n3-226",
    "kanji": "進歩",
    "kana": "しんぽ",
    "romaji": "しんぽ",
    "english": "progress; improvement",
    "nepali": ""
  },
  {
    "id": "n3-227",
    "kanji": "違い",
    "kana": "ちがい",
    "romaji": "ちがい",
    "english": "difference",
    "nepali": ""
  },
  {
    "id": "n3-228",
    "kanji": "選手",
    "kana": "せんしゅ",
    "romaji": "せんしゅ",
    "english": "player; team member",
    "nepali": ""
  },
  {
    "id": "n3-229",
    "kanji": "都会",
    "kana": "とかい",
    "romaji": "とかい",
    "english": "city",
    "nepali": ""
  },
  {
    "id": "n3-230",
    "kanji": "鉄",
    "kana": "てつ",
    "romaji": "てつ",
    "english": "iron (Fe)",
    "nepali": ""
  },
  {
    "id": "n3-231",
    "kanji": "鍋",
    "kana": "なべ",
    "romaji": "なべ",
    "english": "pot",
    "nepali": ""
  },
  {
    "id": "n3-232",
    "kanji": "開始",
    "kana": "かいし",
    "romaji": "かいし",
    "english": "start; commencement",
    "nepali": ""
  },
  {
    "id": "n3-233",
    "kanji": "間違い",
    "kana": "まちがい",
    "romaji": "まちがい",
    "english": "mistake; error",
    "nepali": ""
  },
  {
    "id": "n3-234",
    "kanji": "頂上",
    "kana": "ちょうじょう",
    "romaji": "ちょうじょう",
    "english": "top; summit; peak",
    "nepali": ""
  },
  {
    "id": "n3-235",
    "kanji": "順調",
    "kana": "じゅんちょう",
    "romaji": "じゅんちょう",
    "english": "favourable; OK; all right",
    "nepali": ""
  },
  {
    "id": "n3-236",
    "kanji": "頬",
    "kana": "ほほ",
    "romaji": "ほほ",
    "english": "cheek (of face)",
    "nepali": ""
  },
  {
    "id": "n3-237",
    "kanji": "頭痛",
    "kana": "ずつう",
    "romaji": "ずつう",
    "english": "headache",
    "nepali": ""
  },
  {
    "id": "n3-238",
    "kanji": "頼る",
    "kana": "たよる",
    "romaji": "たよる",
    "english": "to rely on; to count on",
    "nepali": ""
  },
  {
    "id": "n3-239",
    "kanji": "額",
    "kana": "ひたい",
    "romaji": "ひたい",
    "english": "forehead; brow",
    "nepali": ""
  },
  {
    "id": "n3-240",
    "kanji": "風景",
    "kana": "ふうけい",
    "romaji": "ふうけい",
    "english": "scenery",
    "nepali": ""
  },
  {
    "id": "n3-241",
    "kanji": "飼う",
    "kana": "かう",
    "romaji": "かう",
    "english": "to have (a pet or other animal)",
    "nepali": ""
  },
  {
    "id": "n3-242",
    "kanji": "馬",
    "kana": "うま",
    "romaji": "うま",
    "english": "horse",
    "nepali": ""
  },
  {
    "id": "n3-243",
    "kanji": "騒音",
    "kana": "そうおん",
    "romaji": "そうおん",
    "english": "noise",
    "nepali": ""
  },
  {
    "id": "n3-244",
    "kanji": "骨",
    "kana": "ほね",
    "romaji": "ほね",
    "english": "bone",
    "nepali": ""
  },
  {
    "id": "n3-245",
    "kanji": "きちんと",
    "kana": "きちんと",
    "romaji": "きちんと",
    "english": "properly; accurately",
    "nepali": ""
  },
  {
    "id": "n3-246",
    "kanji": "きつい",
    "kana": "きつい",
    "romaji": "きつい",
    "english": "intense; severe; hard",
    "nepali": ""
  },
  {
    "id": "n3-247",
    "kanji": "ぐっすり",
    "kana": "ぐっすり",
    "romaji": "ぐっすり",
    "english": "fast asleep",
    "nepali": ""
  },
  {
    "id": "n3-248",
    "kanji": "さっぱり",
    "kana": "さっぱり",
    "romaji": "さっぱり",
    "english": "feeling refreshed | completely; entirely",
    "nepali": ""
  },
  {
    "id": "n3-249",
    "kanji": "ざっと",
    "kana": "ざっと",
    "romaji": "ざっと",
    "english": "roughly; approximately",
    "nepali": ""
  },
  {
    "id": "n3-250",
    "kanji": "そっくり",
    "kana": "そっくり",
    "romaji": "そっくり",
    "english": "all; altogether | exactly like; just like",
    "nepali": ""
  },
  {
    "id": "n3-251",
    "kanji": "たっぷり",
    "kana": "たっぷり",
    "romaji": "たっぷり",
    "english": "full; ample",
    "nepali": ""
  },
  {
    "id": "n3-252",
    "kanji": "にっこり",
    "kana": "にっこり",
    "romaji": "にっこり",
    "english": "smile; grin",
    "nepali": ""
  },
  {
    "id": "n3-253",
    "kanji": "ぴったり",
    "kana": "ぴったり",
    "romaji": "ぴったり",
    "english": "tightly; closely; exactly; precisely",
    "nepali": ""
  },
  {
    "id": "n3-254",
    "kanji": "ぼんやり",
    "kana": "ぼんやり",
    "romaji": "ぼんやり",
    "english": "absentmindedly; vacantly",
    "nepali": ""
  },
  {
    "id": "n3-255",
    "kanji": "エネルギー",
    "kana": "エネルギー",
    "romaji": "エネルギー",
    "english": "energy; power",
    "nepali": ""
  },
  {
    "id": "n3-256",
    "kanji": "キロ",
    "kana": "キロ",
    "romaji": "キロ",
    "english": "kilometer; kilogram",
    "nepali": ""
  },
  {
    "id": "n3-257",
    "kanji": "グループ",
    "kana": "グループ",
    "romaji": "グループ",
    "english": "group",
    "nepali": ""
  },
  {
    "id": "n3-258",
    "kanji": "スター",
    "kana": "スター",
    "romaji": "スター",
    "english": "star (celestial); celebrity; idol",
    "nepali": ""
  },
  {
    "id": "n3-259",
    "kanji": "セット",
    "kana": "セット",
    "romaji": "セット",
    "english": "set; set meal",
    "nepali": ""
  },
  {
    "id": "n3-260",
    "kanji": "ソファー",
    "kana": "ソファー",
    "romaji": "ソファー",
    "english": "sofa",
    "nepali": ""
  },
  {
    "id": "n3-261",
    "kanji": "チャンス",
    "kana": "チャンス",
    "romaji": "チャンス",
    "english": "chance",
    "nepali": ""
  },
  {
    "id": "n3-262",
    "kanji": "チーズ",
    "kana": "チーズ",
    "romaji": "チーズ",
    "english": "cheese",
    "nepali": ""
  },
  {
    "id": "n3-263",
    "kanji": "デート",
    "kana": "デート",
    "romaji": "デート",
    "english": "date",
    "nepali": ""
  },
  {
    "id": "n3-264",
    "kanji": "トップ",
    "kana": "トップ",
    "romaji": "トップ",
    "english": "top",
    "nepali": ""
  },
  {
    "id": "n3-265",
    "kanji": "ドラマ",
    "kana": "ドラマ",
    "romaji": "ドラマ",
    "english": "(TV) drama",
    "nepali": ""
  },
  {
    "id": "n3-266",
    "kanji": "ドレス",
    "kana": "ドレス",
    "romaji": "ドレス",
    "english": "dress",
    "nepali": ""
  },
  {
    "id": "n3-267",
    "kanji": "プラン",
    "kana": "プラン",
    "romaji": "プラン",
    "english": "plan",
    "nepali": ""
  },
  {
    "id": "n3-268",
    "kanji": "ミス",
    "kana": "ミス",
    "romaji": "ミス",
    "english": "mistake",
    "nepali": ""
  },
  {
    "id": "n3-269",
    "kanji": "メモ",
    "kana": "メモ",
    "romaji": "メモ",
    "english": "memo",
    "nepali": ""
  },
  {
    "id": "n3-270",
    "kanji": "一体",
    "kana": "いったい",
    "romaji": "いったい",
    "english": "...the heck (e.g. \"what the heck?\"); generally",
    "nepali": ""
  },
  {
    "id": "n3-271",
    "kanji": "一家",
    "kana": "いっか",
    "romaji": "いっか",
    "english": "a family; a household",
    "nepali": ""
  },
  {
    "id": "n3-272",
    "kanji": "一層",
    "kana": "いっそう",
    "romaji": "いっそう",
    "english": "much more; all the more",
    "nepali": ""
  },
  {
    "id": "n3-273",
    "kanji": "一度に",
    "kana": "いちどに",
    "romaji": "いちどに",
    "english": "all at once",
    "nepali": ""
  },
  {
    "id": "n3-274",
    "kanji": "一方",
    "kana": "いっぽう",
    "romaji": "いっぽう",
    "english": "one side (of two); one way",
    "nepali": ""
  },
  {
    "id": "n3-275",
    "kanji": "一時的",
    "kana": "いちじてき",
    "romaji": "いちじてき",
    "english": "temporary",
    "nepali": ""
  },
  {
    "id": "n3-276",
    "kanji": "一時",
    "kana": "いちじ",
    "romaji": "いちじ",
    "english": "one time; a moment",
    "nepali": ""
  },
  {
    "id": "n3-277",
    "kanji": "一生",
    "kana": "いっしょう",
    "romaji": "いっしょう",
    "english": "whole life; a lifetime",
    "nepali": ""
  },
  {
    "id": "n3-278",
    "kanji": "一瞬",
    "kana": "いっしゅん",
    "romaji": "いっしゅん",
    "english": "instant; moment",
    "nepali": ""
  },
  {
    "id": "n3-279",
    "kanji": "一種",
    "kana": "いっしゅ",
    "romaji": "いっしゅ",
    "english": "species; kind",
    "nepali": ""
  },
  {
    "id": "n3-280",
    "kanji": "一致",
    "kana": "いっち",
    "romaji": "いっち",
    "english": "coincidence; agreement",
    "nepali": ""
  },
  {
    "id": "n3-281",
    "kanji": "一般的",
    "kana": "いっぱんてき",
    "romaji": "いっぱんてき",
    "english": "common; general; for the masses",
    "nepali": ""
  },
  {
    "id": "n3-282",
    "kanji": "一般",
    "kana": "いっぱん",
    "romaji": "いっぱん",
    "english": "general; ordinary; common",
    "nepali": ""
  },
  {
    "id": "n3-283",
    "kanji": "万一",
    "kana": "まんいち",
    "romaji": "まんいち",
    "english": "emergency; unlikely event | by some chance",
    "nepali": ""
  },
  {
    "id": "n3-284",
    "kanji": "万が一",
    "kana": "まんがいち",
    "romaji": "まんがいち",
    "english": "in the unlikely event; in the worst case",
    "nepali": ""
  },
  {
    "id": "n3-285",
    "kanji": "上京",
    "kana": "じょうきょう",
    "romaji": "じょうきょう",
    "english": "going to the capital (Tokyo)",
    "nepali": ""
  },
  {
    "id": "n3-286",
    "kanji": "上等",
    "kana": "じょうとう",
    "romaji": "じょうとう",
    "english": "superior; first-class",
    "nepali": ""
  },
  {
    "id": "n3-287",
    "kanji": "上達",
    "kana": "じょうたつ",
    "romaji": "じょうたつ",
    "english": "improvement (e.g. in skill, ability); advance",
    "nepali": ""
  },
  {
    "id": "n3-288",
    "kanji": "下す（おろす）",
    "kana": "おろす",
    "romaji": "おろす",
    "english": "to lower",
    "nepali": ""
  },
  {
    "id": "n3-289",
    "kanji": "下り",
    "kana": "くだり",
    "romaji": "くだり",
    "english": "train going away from Tokyo",
    "nepali": ""
  },
  {
    "id": "n3-290",
    "kanji": "不利",
    "kana": "ふり",
    "romaji": "ふり",
    "english": "disadvantage; handicap",
    "nepali": ""
  },
  {
    "id": "n3-291",
    "kanji": "不可",
    "kana": "ふか",
    "romaji": "ふか",
    "english": "not possible",
    "nepali": ""
  },
  {
    "id": "n3-292",
    "kanji": "不安",
    "kana": "ふあん",
    "romaji": "ふあん",
    "english": "anxiety; insecurity",
    "nepali": ""
  },
  {
    "id": "n3-293",
    "kanji": "不平",
    "kana": "ふへい",
    "romaji": "ふへい",
    "english": "discontent; dissatisfaction",
    "nepali": ""
  },
  {
    "id": "n3-294",
    "kanji": "不幸",
    "kana": "ふこう",
    "romaji": "ふこう",
    "english": "misfortune",
    "nepali": ""
  },
  {
    "id": "n3-295",
    "kanji": "不思議",
    "kana": "ふしぎ",
    "romaji": "ふしぎ",
    "english": "wonder; miracle; strange",
    "nepali": ""
  },
  {
    "id": "n3-296",
    "kanji": "不正",
    "kana": "ふせい",
    "romaji": "ふせい",
    "english": "injustice; unfairness",
    "nepali": ""
  },
  {
    "id": "n3-297",
    "kanji": "不自由",
    "kana": "ふじゆう",
    "romaji": "ふじゆう",
    "english": "disability; impairment (physical, mental, etc.)",
    "nepali": ""
  },
  {
    "id": "n3-298",
    "kanji": "与える",
    "kana": "あたえる",
    "romaji": "あたえる",
    "english": "to give; to bestow",
    "nepali": ""
  },
  {
    "id": "n3-299",
    "kanji": "世紀",
    "kana": "せいき",
    "romaji": "せいき",
    "english": "century; era",
    "nepali": ""
  },
  {
    "id": "n3-300",
    "kanji": "世間",
    "kana": "せけん",
    "romaji": "せけん",
    "english": "society; people",
    "nepali": ""
  },
  {
    "id": "n3-301",
    "kanji": "丘",
    "kana": "おか",
    "romaji": "おか",
    "english": "hill",
    "nepali": ""
  },
  {
    "id": "n3-302",
    "kanji": "両替",
    "kana": "りょうがえ",
    "romaji": "りょうがえ",
    "english": "money exchange",
    "nepali": ""
  },
  {
    "id": "n3-303",
    "kanji": "中古",
    "kana": "ちゅうこ",
    "romaji": "ちゅうこ",
    "english": "used; second-hand",
    "nepali": ""
  },
  {
    "id": "n3-304",
    "kanji": "中央",
    "kana": "ちゅうおう",
    "romaji": "ちゅうおう",
    "english": "centre; middle; capitol",
    "nepali": ""
  },
  {
    "id": "n3-305",
    "kanji": "中学",
    "kana": "ちゅうがく",
    "romaji": "ちゅうがく",
    "english": "middle school",
    "nepali": ""
  },
  {
    "id": "n3-306",
    "kanji": "中心",
    "kana": "ちゅうしん",
    "romaji": "ちゅうしん",
    "english": "center; middle; core",
    "nepali": ""
  },
  {
    "id": "n3-307",
    "kanji": "中止",
    "kana": "ちゅうし",
    "romaji": "ちゅうし",
    "english": "suspension; interruption",
    "nepali": ""
  },
  {
    "id": "n3-308",
    "kanji": "丸",
    "kana": "まる",
    "romaji": "まる",
    "english": "circle",
    "nepali": ""
  },
  {
    "id": "n3-309",
    "kanji": "主に",
    "kana": "おもに",
    "romaji": "おもに",
    "english": "mainly",
    "nepali": ""
  },
  {
    "id": "n3-310",
    "kanji": "主婦",
    "kana": "しゅふ",
    "romaji": "しゅふ",
    "english": "housewife",
    "nepali": ""
  },
  {
    "id": "n3-311",
    "kanji": "主張",
    "kana": "しゅちょう",
    "romaji": "しゅちょう",
    "english": "claim; assertion",
    "nepali": ""
  },
  {
    "id": "n3-312",
    "kanji": "主義",
    "kana": "しゅぎ",
    "romaji": "しゅぎ",
    "english": "doctrine; rule",
    "nepali": ""
  },
  {
    "id": "n3-313",
    "kanji": "主要",
    "kana": "しゅよう",
    "romaji": "しゅよう",
    "english": "main; principal",
    "nepali": ""
  },
  {
    "id": "n3-314",
    "kanji": "乗せる",
    "kana": "のせる",
    "romaji": "のせる",
    "english": "to place on (something)",
    "nepali": ""
  },
  {
    "id": "n3-315",
    "kanji": "乗客",
    "kana": "じょうきゃく",
    "romaji": "じょうきゃく",
    "english": "passenger",
    "nepali": ""
  },
  {
    "id": "n3-316",
    "kanji": "予報",
    "kana": "よほう",
    "romaji": "よほう",
    "english": "forecast; prediction",
    "nepali": ""
  },
  {
    "id": "n3-317",
    "kanji": "予期",
    "kana": "よき",
    "romaji": "よき",
    "english": "expectation; assumption",
    "nepali": ""
  },
  {
    "id": "n3-318",
    "kanji": "予測",
    "kana": "よそく",
    "romaji": "よそく",
    "english": "estimation",
    "nepali": ""
  },
  {
    "id": "n3-319",
    "kanji": "予防",
    "kana": "よぼう",
    "romaji": "よぼう",
    "english": "prevention",
    "nepali": ""
  },
  {
    "id": "n3-320",
    "kanji": "事務",
    "kana": "じむ",
    "romaji": "じむ",
    "english": "office work",
    "nepali": ""
  },
  {
    "id": "n3-321",
    "kanji": "事実",
    "kana": "じじつ",
    "romaji": "じじつ",
    "english": "fact; reality",
    "nepali": ""
  },
  {
    "id": "n3-322",
    "kanji": "事情",
    "kana": "じじょう",
    "romaji": "じじょう",
    "english": "circumstances",
    "nepali": ""
  },
  {
    "id": "n3-323",
    "kanji": "事態",
    "kana": "じたい",
    "romaji": "じたい",
    "english": "situation",
    "nepali": ""
  },
  {
    "id": "n3-324",
    "kanji": "お互い",
    "kana": "おたがい",
    "romaji": "おたがい",
    "english": "mutual; reciprocal",
    "nepali": ""
  },
  {
    "id": "n3-325",
    "kanji": "交換",
    "kana": "こうかん",
    "romaji": "こうかん",
    "english": "exchange; substitution",
    "nepali": ""
  },
  {
    "id": "n3-326",
    "kanji": "交際",
    "kana": "こうさい",
    "romaji": "こうさい",
    "english": "company; friendship",
    "nepali": ""
  },
  {
    "id": "n3-327",
    "kanji": "人工",
    "kana": "じんこう",
    "romaji": "じんこう",
    "english": "artificial; man-made",
    "nepali": ""
  },
  {
    "id": "n3-328",
    "kanji": "人気",
    "kana": "にんき",
    "romaji": "にんき",
    "english": "popularity",
    "nepali": ""
  },
  {
    "id": "n3-329",
    "kanji": "人物",
    "kana": "じんぶつ",
    "romaji": "じんぶつ",
    "english": "person",
    "nepali": ""
  },
  {
    "id": "n3-330",
    "kanji": "人種",
    "kana": "じんしゅ",
    "romaji": "じんしゅ",
    "english": "race (of people)",
    "nepali": ""
  },
  {
    "id": "n3-331",
    "kanji": "今に",
    "kana": "いまに",
    "romaji": "いまに",
    "english": "before long; even now",
    "nepali": ""
  },
  {
    "id": "n3-332",
    "kanji": "今にも",
    "kana": "いまにも",
    "romaji": "いまにも",
    "english": "at any time",
    "nepali": ""
  },
  {
    "id": "n3-333",
    "kanji": "今回",
    "kana": "こんかい",
    "romaji": "こんかい",
    "english": "this time",
    "nepali": ""
  },
  {
    "id": "n3-334",
    "kanji": "今後",
    "kana": "こんご",
    "romaji": "こんご",
    "english": "from now on",
    "nepali": ""
  },
  {
    "id": "n3-335",
    "kanji": "他人",
    "kana": "たにん",
    "romaji": "たにん",
    "english": "another person; others",
    "nepali": ""
  },
  {
    "id": "n3-336",
    "kanji": "代理",
    "kana": "だいり",
    "romaji": "だいり",
    "english": "proxy; agent",
    "nepali": ""
  },
  {
    "id": "n3-337",
    "kanji": "代表",
    "kana": "だいひょう",
    "romaji": "だいひょう",
    "english": "representative",
    "nepali": ""
  },
  {
    "id": "n3-338",
    "kanji": "代金",
    "kana": "だいきん",
    "romaji": "だいきん",
    "english": "cost; charge; bill; fee",
    "nepali": ""
  },
  {
    "id": "n3-339",
    "kanji": "以来",
    "kana": "いらい",
    "romaji": "いらい",
    "english": "henceforth",
    "nepali": ""
  },
  {
    "id": "n3-340",
    "kanji": "仲間",
    "kana": "なかま",
    "romaji": "なかま",
    "english": "associate; comrade",
    "nepali": ""
  },
  {
    "id": "n3-341",
    "kanji": "任せる",
    "kana": "まかせる",
    "romaji": "まかせる",
    "english": "to entrust (e.g. a task) to another; to leave to",
    "nepali": ""
  },
  {
    "id": "n3-342",
    "kanji": "企業",
    "kana": "きぎょう",
    "romaji": "きぎょう",
    "english": "corporation; business",
    "nepali": ""
  },
  {
    "id": "n3-343",
    "kanji": "会合",
    "kana": "かいごう",
    "romaji": "かいごう",
    "english": "assembly; gathering",
    "nepali": ""
  },
  {
    "id": "n3-344",
    "kanji": "会計",
    "kana": "かいけい",
    "romaji": "かいけい",
    "english": "accounting; finance",
    "nepali": ""
  },
  {
    "id": "n3-345",
    "kanji": "伸ばす",
    "kana": "のばす",
    "romaji": "のばす",
    "english": "to grow (e.g. hair, nails); to stretch; to reach out",
    "nepali": ""
  },
  {
    "id": "n3-346",
    "kanji": "伺う",
    "kana": "うかがう",
    "romaji": "うかがう",
    "english": "(hum) to ask; to inquire | (hum) to visit",
    "nepali": ""
  },
  {
    "id": "n3-347",
    "kanji": "位",
    "kana": "くらい",
    "romaji": "くらい",
    "english": "about",
    "nepali": ""
  },
  {
    "id": "n3-348",
    "kanji": "位置",
    "kana": "いち",
    "romaji": "いち",
    "english": "place; position",
    "nepali": ""
  },
  {
    "id": "n3-349",
    "kanji": "住宅",
    "kana": "じゅうたく",
    "romaji": "じゅうたく",
    "english": "residence; housing",
    "nepali": ""
  },
  {
    "id": "n3-350",
    "kanji": "体温",
    "kana": "たいおん",
    "romaji": "たいおん",
    "english": "body temperature",
    "nepali": ""
  },
  {
    "id": "n3-351",
    "kanji": "体育",
    "kana": "たいいく",
    "romaji": "たいいく",
    "english": "physical education",
    "nepali": ""
  },
  {
    "id": "n3-352",
    "kanji": "余分",
    "kana": "よぶん",
    "romaji": "よぶん",
    "english": "extra; excess",
    "nepali": ""
  },
  {
    "id": "n3-353",
    "kanji": "余裕",
    "kana": "よゆう",
    "romaji": "よゆう",
    "english": "surplus; leeway; flexibility",
    "nepali": ""
  },
  {
    "id": "n3-354",
    "kanji": "作家",
    "kana": "さっか",
    "romaji": "さっか",
    "english": "author",
    "nepali": ""
  },
  {
    "id": "n3-355",
    "kanji": "作曲",
    "kana": "さっきょく",
    "romaji": "さっきょく",
    "english": "composition (of music)",
    "nepali": ""
  },
  {
    "id": "n3-356",
    "kanji": "作法",
    "kana": "さほう",
    "romaji": "さほう",
    "english": "manners; etiquette",
    "nepali": ""
  },
  {
    "id": "n3-357",
    "kanji": "作物",
    "kana": "さくもつ",
    "romaji": "さくもつ",
    "english": "crops",
    "nepali": ""
  },
  {
    "id": "n3-358",
    "kanji": "使用",
    "kana": "しよう",
    "romaji": "しよう",
    "english": "use",
    "nepali": ""
  },
  {
    "id": "n3-359",
    "kanji": "例",
    "kana": "れい",
    "romaji": "れい",
    "english": "example",
    "nepali": ""
  },
  {
    "id": "n3-360",
    "kanji": "供給",
    "kana": "きょうきゅう",
    "romaji": "きょうきゅう",
    "english": "supply; provision",
    "nepali": ""
  },
  {
    "id": "n3-361",
    "kanji": "依頼",
    "kana": "いらい",
    "romaji": "いらい",
    "english": "request; commission",
    "nepali": ""
  },
  {
    "id": "n3-362",
    "kanji": "価値",
    "kana": "かち",
    "romaji": "かち",
    "english": "value; worth",
    "nepali": ""
  },
  {
    "id": "n3-363",
    "kanji": "価格",
    "kana": "かかく",
    "romaji": "かかく",
    "english": "price; value",
    "nepali": ""
  },
  {
    "id": "n3-364",
    "kanji": "便",
    "kana": "びん",
    "romaji": "びん",
    "english": "flight (e.g. airline flight)",
    "nepali": ""
  },
  {
    "id": "n3-365",
    "kanji": "便り",
    "kana": "たより",
    "romaji": "たより",
    "english": "news; tidings; letter",
    "nepali": ""
  },
  {
    "id": "n3-366",
    "kanji": "係",
    "kana": "かかり",
    "romaji": "かかり",
    "english": "person in charge; clerk",
    "nepali": ""
  },
  {
    "id": "n3-367",
    "kanji": "保証",
    "kana": "ほしょう",
    "romaji": "ほしょう",
    "english": "guarantee; warranty",
    "nepali": ""
  },
  {
    "id": "n3-368",
    "kanji": "信じる",
    "kana": "しんじる",
    "romaji": "しんじる",
    "english": "to believe; to place trust in",
    "nepali": ""
  },
  {
    "id": "n3-369",
    "kanji": "信仰",
    "kana": "しんこう",
    "romaji": "しんこう",
    "english": "(religious) faith; belief",
    "nepali": ""
  },
  {
    "id": "n3-370",
    "kanji": "信号",
    "kana": "しんごう",
    "romaji": "しんごう",
    "english": "traffic signal",
    "nepali": ""
  },
  {
    "id": "n3-371",
    "kanji": "信用",
    "kana": "しんよう",
    "romaji": "しんよう",
    "english": "confidence; trust",
    "nepali": ""
  },
  {
    "id": "n3-372",
    "kanji": "修正",
    "kana": "しゅうせい",
    "romaji": "しゅうせい",
    "english": "amendment; correction; revision",
    "nepali": ""
  },
  {
    "id": "n3-373",
    "kanji": "修理",
    "kana": "しゅうり",
    "romaji": "しゅうり",
    "english": "repair",
    "nepali": ""
  },
  {
    "id": "n3-374",
    "kanji": "個人",
    "kana": "こじん",
    "romaji": "こじん",
    "english": "individual; personal",
    "nepali": ""
  },
  {
    "id": "n3-375",
    "kanji": "倒す",
    "kana": "たおす",
    "romaji": "たおす",
    "english": "to knock down; to ruin",
    "nepali": ""
  },
  {
    "id": "n3-376",
    "kanji": "候補",
    "kana": "こうほ",
    "romaji": "こうほ",
    "english": "candidate; contender",
    "nepali": ""
  },
  {
    "id": "n3-377",
    "kanji": "借金",
    "kana": "しゃっきん",
    "romaji": "しゃっきん",
    "english": "debt; loan",
    "nepali": ""
  },
  {
    "id": "n3-378",
    "kanji": "偉大",
    "kana": "いだい",
    "romaji": "いだい",
    "english": "greatness",
    "nepali": ""
  },
  {
    "id": "n3-379",
    "kanji": "健康",
    "kana": "けんこう",
    "romaji": "けんこう",
    "english": "health",
    "nepali": ""
  },
  {
    "id": "n3-380",
    "kanji": "たまたま",
    "kana": "たまたま",
    "romaji": "たまたま",
    "english": "casually; unexpectedly",
    "nepali": ""
  },
  {
    "id": "n3-381",
    "kanji": "偶然",
    "kana": "ぐうぜん",
    "romaji": "ぐうぜん",
    "english": "coincidence",
    "nepali": ""
  },
  {
    "id": "n3-382",
    "kanji": "備える",
    "kana": "そなえる",
    "romaji": "そなえる",
    "english": "to furnish with; to equip with",
    "nepali": ""
  },
  {
    "id": "n3-383",
    "kanji": "傷",
    "kana": "きず",
    "romaji": "きず",
    "english": "wound; injury",
    "nepali": ""
  },
  {
    "id": "n3-384",
    "kanji": "傾向",
    "kana": "けいこう",
    "romaji": "けいこう",
    "english": "tendency; inclination",
    "nepali": ""
  },
  {
    "id": "n3-385",
    "kanji": "わずか",
    "kana": "わずか",
    "romaji": "わずか",
    "english": "only; merely; small quantity",
    "nepali": ""
  },
  {
    "id": "n3-386",
    "kanji": "働き",
    "kana": "はたらき",
    "romaji": "はたらき",
    "english": "work; labor",
    "nepali": ""
  },
  {
    "id": "n3-387",
    "kanji": "優れる",
    "kana": "すぐれる",
    "romaji": "すぐれる",
    "english": "to surpass; to excel",
    "nepali": ""
  },
  {
    "id": "n3-388",
    "kanji": "元",
    "kana": "もと",
    "romaji": "もと",
    "english": "origin; source; foundation",
    "nepali": ""
  },
  {
    "id": "n3-389",
    "kanji": "光景",
    "kana": "こうけい",
    "romaji": "こうけい",
    "english": "scene; view",
    "nepali": ""
  },
  {
    "id": "n3-390",
    "kanji": "克服",
    "kana": "こくふく",
    "romaji": "こくふく",
    "english": "overcoming (of a difficulty, illness, handicap, etc.); victory over",
    "nepali": ""
  },
  {
    "id": "n3-391",
    "kanji": "免許",
    "kana": "めんきょ",
    "romaji": "めんきょ",
    "english": "license",
    "nepali": ""
  },
  {
    "id": "n3-392",
    "kanji": "うさぎ",
    "kana": "うさぎ",
    "romaji": "うさぎ",
    "english": "rabbit",
    "nepali": ""
  },
  {
    "id": "n3-393",
    "kanji": "党",
    "kana": "とう",
    "romaji": "とう",
    "english": "party (political); faction",
    "nepali": ""
  },
  {
    "id": "n3-394",
    "kanji": "入力",
    "kana": "にゅうりょく",
    "romaji": "にゅうりょく",
    "english": "input; (data) entry",
    "nepali": ""
  },
  {
    "id": "n3-395",
    "kanji": "入場",
    "kana": "にゅうじょう",
    "romaji": "にゅうじょう",
    "english": "entrance; admission",
    "nepali": ""
  },
  {
    "id": "n3-396",
    "kanji": "全国",
    "kana": "ぜんこく",
    "romaji": "ぜんこく",
    "english": "nationwide",
    "nepali": ""
  },
  {
    "id": "n3-397",
    "kanji": "公平",
    "kana": "こうへい",
    "romaji": "こうへい",
    "english": "fairness; impartiality",
    "nepali": ""
  },
  {
    "id": "n3-398",
    "kanji": "共同",
    "kana": "きょうどう",
    "romaji": "きょうどう",
    "english": "co-operation; collaboration",
    "nepali": ""
  },
  {
    "id": "n3-399",
    "kanji": "具体的",
    "kana": "ぐたいてき",
    "romaji": "ぐたいてき",
    "english": "concrete",
    "nepali": ""
  },
  {
    "id": "n3-400",
    "kanji": "具体",
    "kana": "ぐたい",
    "romaji": "ぐたい",
    "english": "concrete; tangible",
    "nepali": ""
  },
  {
    "id": "n3-401",
    "kanji": "典型",
    "kana": "てんけい",
    "romaji": "てんけい",
    "english": "model; archetypal; representative",
    "nepali": ""
  },
  {
    "id": "n3-402",
    "kanji": "冒険",
    "kana": "ぼうけん",
    "romaji": "ぼうけん",
    "english": "risk; venture",
    "nepali": ""
  },
  {
    "id": "n3-403",
    "kanji": "冷静",
    "kana": "れいせい",
    "romaji": "れいせい",
    "english": "calmness; composure",
    "nepali": ""
  },
  {
    "id": "n3-404",
    "kanji": "凍る",
    "kana": "こおる",
    "romaji": "こおる",
    "english": "to freeze",
    "nepali": ""
  },
  {
    "id": "n3-405",
    "kanji": "処理",
    "kana": "しょり",
    "romaji": "しょり",
    "english": "processing; disposal",
    "nepali": ""
  },
  {
    "id": "n3-406",
    "kanji": "出会い",
    "kana": "であい",
    "romaji": "であい",
    "english": "meeting; encounter",
    "nepali": ""
  },
  {
    "id": "n3-407",
    "kanji": "出会う",
    "kana": "であう",
    "romaji": "であう",
    "english": "to come across; to meet; to encounter",
    "nepali": ""
  },
  {
    "id": "n3-408",
    "kanji": "出来事",
    "kana": "できごと",
    "romaji": "できごと",
    "english": "incident; happening",
    "nepali": ""
  },
  {
    "id": "n3-409",
    "kanji": "出版",
    "kana": "しゅっぱん",
    "romaji": "しゅっぱん",
    "english": "publication",
    "nepali": ""
  },
  {
    "id": "n3-410",
    "kanji": "出身",
    "kana": "しゅっしん",
    "romaji": "しゅっしん",
    "english": "person's origin (e.g. city, country, parentage, school)",
    "nepali": ""
  },
  {
    "id": "n3-411",
    "kanji": "刀",
    "kana": "かたな",
    "romaji": "かたな",
    "english": "sword; katana",
    "nepali": ""
  },
  {
    "id": "n3-412",
    "kanji": "分ける",
    "kana": "わける",
    "romaji": "わける",
    "english": "to divide; to split",
    "nepali": ""
  },
  {
    "id": "n3-413",
    "kanji": "分析",
    "kana": "ぶんせき",
    "romaji": "ぶんせき",
    "english": "analysis",
    "nepali": ""
  },
  {
    "id": "n3-414",
    "kanji": "切れ",
    "kana": "きれ",
    "romaji": "きれ",
    "english": "piece; slice",
    "nepali": ""
  },
  {
    "id": "n3-415",
    "kanji": "切れる",
    "kana": "きれる",
    "romaji": "きれる",
    "english": "to be cut; to split",
    "nepali": ""
  },
  {
    "id": "n3-416",
    "kanji": "刈る",
    "kana": "かる",
    "romaji": "かる",
    "english": "to cut; to mow; to prune",
    "nepali": ""
  },
  {
    "id": "n3-417",
    "kanji": "列",
    "kana": "れつ",
    "romaji": "れつ",
    "english": "row; line; column",
    "nepali": ""
  },
  {
    "id": "n3-418",
    "kanji": "列車",
    "kana": "れっしゃ",
    "romaji": "れっしゃ",
    "english": "train",
    "nepali": ""
  },
  {
    "id": "n3-419",
    "kanji": "判断",
    "kana": "はんだん",
    "romaji": "はんだん",
    "english": "judgement; decision",
    "nepali": ""
  },
  {
    "id": "n3-420",
    "kanji": "別れ",
    "kana": "わかれ",
    "romaji": "わかれ",
    "english": "parting; separation",
    "nepali": ""
  },
  {
    "id": "n3-421",
    "kanji": "利口",
    "kana": "りこう",
    "romaji": "りこう",
    "english": "clever; shrewd; well-behaved (of kids, animals, etc)",
    "nepali": ""
  },
  {
    "id": "n3-422",
    "kanji": "利益",
    "kana": "りえき",
    "romaji": "りえき",
    "english": "profit; gains",
    "nepali": ""
  },
  {
    "id": "n3-423",
    "kanji": "制度",
    "kana": "せいど",
    "romaji": "せいど",
    "english": "system; institution",
    "nepali": ""
  },
  {
    "id": "n3-424",
    "kanji": "制限",
    "kana": "せいげん",
    "romaji": "せいげん",
    "english": "restriction; limit",
    "nepali": ""
  },
  {
    "id": "n3-425",
    "kanji": "券",
    "kana": "けん",
    "romaji": "けん",
    "english": "ticket; coupon",
    "nepali": ""
  },
  {
    "id": "n3-426",
    "kanji": "刺激",
    "kana": "しげき",
    "romaji": "しげき",
    "english": "stimulus",
    "nepali": ""
  },
  {
    "id": "n3-427",
    "kanji": "前者",
    "kana": "ぜんしゃ",
    "romaji": "ぜんしゃ",
    "english": "the former",
    "nepali": ""
  },
  {
    "id": "n3-428",
    "kanji": "前進",
    "kana": "ぜんしん",
    "romaji": "ぜんしん",
    "english": "advance; progress",
    "nepali": ""
  },
  {
    "id": "n3-429",
    "kanji": "割る",
    "kana": "わる",
    "romaji": "わる",
    "english": "to divide; to split; to break",
    "nepali": ""
  },
  {
    "id": "n3-430",
    "kanji": "劇場",
    "kana": "げきじょう",
    "romaji": "げきじょう",
    "english": "theatre; playhouse",
    "nepali": ""
  }
];
