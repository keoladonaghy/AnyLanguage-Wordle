import { CONFIG } from './config'

export const WORDS = ['aliʻi', 'akula', 'lākou', 'ʻāina', 'ihola', 'maila', 'ʻoiai', 'aʻela', 'hōʻea', 'laila', 'kākou', 'haole', 'maoli', 'waena', 'loaʻa', 'aloha', 'oʻahu', 'ʻōpio', 'keiki', 'ʻelua', 'makua', 'waiho', 'heiau', 'kākau', 'kahua', 'lāʻau', 'moana', 'kōkua', 'nīnau', 'hānai', 'mākou', 'kāhea', 'keʻei', 'hānau', 'lāhui', 'ukali', 'puaʻa', 'wāwae', 'kiaʻi', 'hahai', 'mākua', 'nunui', 'ʻīkoi', 'ʻākau', 'māhoe', 'niuhi', 'makoa', 'kaula', 'mōhai', 'hāpai', 'penei', 'ʻāhia', 'lālau', 'ʻeleu', 'mālie', 'keawe', 'ʻolua', 'honua', 'kālua', 'mauna', 'māwae', 'pehea', 'lehua', 'kūʻai', 'uhaʻi', 'mauʻu', 'lehia', 'kāula', 'awāwa', 'ʻeono', 'kālai', 'hauna', 'paukū', 'poina', 'ʻauʻa', 'moena', 'mamao', 'ʻuala', 'maliu', 'kaihe', 'hekau', 'meheu', 'launa', 'ʻōuli', 'kaupō', 'kūlou', 'waele', 'kukui', 'ʻoulu', 'ukana', 'pauka', 'naʻau', 'ʻōniu', 'loloa', 'ʻīlio', 'hōʻeu', 'nanea', 'nonoi', 'noiʻi', 'maika', 'koena', 'pālau', 'laulā', 'kaʻao', 'hālau', 'uhaki', 'wauke', 'okōko', 'kāuna', 'maiʻa', 'hahau', 'ʻāhiu', 'kiola', 'ʻōiwi', 'uhuki', 'kiʻei', 'anana', 'ʻehia', 'huina', 'kaena', 'pūniu', 'kuapā', 'ʻeiwa', 'pāhoa', 'hōʻoi', 'ʻaina', 'kīhei', 'hāmau', 'mākia', 'heana', 'unuhi', 'kūhiō', 'niniu', 'nāihe', 'kainō', 'kuemi', 'ʻāhua', 'līloa', 'hākau', 'ʻanae', 'pouli', 'kinai', 'loina', 'olonā', 'huila', 'kaiao', 'akāka', 'mōlia', 'maile', 'kāmoe', 'hoʻāo', 'kunou', 'pōniu', 'wahie', 'luaʻi', 'kēhau', 'ʻūlei', 'ʻiako', 'hiolo', 'hihia', 'akena', 'hāʻao', 'hāiki', 'kūlia', 'ʻonou', 'hāuna', 'makau', 'ʻōpua', 'ʻikuā', 'ʻōnou', 'puaʻi', 'houpo', 'luahi', 'ʻoaka', 'luina', 'naele', 'kūlua', 'nākai', 'iulai', 'aumoe', 'manuā', 'maunu', 'haupa', 'lānai', 'puehu', 'pōʻai', 'ʻāoʻo', 'haele', 'nanao', 'pōhue', 'hoana', 'kāohi', 'holoi', 'pālua', 'heulu', 'kāʻeo', 'hokua', 'kāpae', 'ʻaeʻa', 'kaona', 'kuʻia', 'ʻalae', 'laukī', 'kākia', 'ʻēheu', 'kāmau', 'ōlaʻi', 'hōʻoā', 'kaʻau', 'uwaʻu', 'pauoa', 'kuili', 'paʻao', 'nīʻau', 'uianu', 'pīkai', 'ulele', 'kuene', 'paila', 'kāoʻo', 'uhalu', 'hāloa', 'kīlou', 'ʻiewe', 'kupua', 'kuehu', 'kalae', 'līwai', 'haili', 'puana', 'ulana', 'haoʻa', 'ʻāhui', 'hahae', 'keanu', 'kuala', 'lupea', 'maiau', 'ʻōmea', 'kaʻeo', 'ikīki', 'ʻaila', 'kēwai', 'keoho', 'mālia', 'ʻāpua', 'puakō', 'hāmoa', 'lēhau', 'neʻeu', 'kuana', 'mulea', 'ʻoāwa', 'ʻumia', 'kawai', 'ʻōhua', 'ʻōmau', 'pahua', 'huhui', 'paina', 'mahae', 'huelo', 'lāʻie', 'kēpau', 'kūoʻo', 'kuewa', 'nahae', 'ʻīnea', 'pōlua', 'kualā', 'pīkoi', 'keaka', 'pāʻia', 'kaohi', 'lāuli', 'pouli', 'hauli', 'kāʻei', 'mania', 'hiena', 'wēkiu', 'pinau', 'kānoa', 'ʻūkiu', 'helei', 'puoko', 'ʻueke', 'māino', 'laula', 'hului', 'mīʻoi', 'kākua', 'hō‘ea', 'pelio', 'piele', 'anaka', 'iwikū', 'kalua', 'ʻiole', 'hinua', 'nāulu', 'hihiu', 'ʻikea', 'hōkeo', 'mauli', 'mouku', 'hoaka', 'auoha', 'kuāua', 'kīloi', 'ʻauae', 'wēlau', 'ānehe', 'hainā', 'kuini', 'ukupē', 'akule', 'liona', 'keʻeo', 'lūʻau', 'nāuki', 'hoʻia', 'kīhae', 'puʻua', 'kahuā', 'kūliu', 'puela', 'aʻelā', 'ʻalua', 'ulukū', 'pāʻao', 'uwahi', 'leina', 'ʻānae', 'ʻaʻau', 'pāuli', 'kaulu', 'nomea', 'mōlio', 'lalau', 'malau', 'ʻōahi', 'wākea', 'kekea', 'nanai', 'līhau', 'ihona', 'ʻaʻai', 'mānoa', 'waikī', 'haika', 'koaʻe', 'pāpio', 'līpoa', 'pinao', 'ʻoʻoi', 'ʻāweu', 'waipā', 'hiapo', 'kaniu', 'kiapā', 'ʻaukā', 'hāweo', 'ʻōhai', 'puoho', 'loulu', 'kīnai']

if (CONFIG.normalization) {
  WORDS.forEach((val, i) => (WORDS[i] = val.normalize(CONFIG.normalization)))
}

function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

if (CONFIG.shuffle) {
  shuffle(WORDS)
}
