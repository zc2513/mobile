export function keywords(key, { title }) {
    if (title && typeof (title) !== 'undefined') {
        metas[key].title = title + '-'
    }
    return metas[key]
}
const metas = {
    // 首页
    home: {
        title: '工程众创网-工程领域全产业链信息交流互动平台-',
        meta: [
            { name: 'keywords', content: '工程众创，工程众创网，工程众创网，众创工厂，众创空间，工程项目信息，招投标信息，资格查询，业绩查询' },
            { hid: 'description', name: 'description', content: '工程众创网全面的工程领域信息交流平台,可免费发布与查看工程行业各类信息资讯' }
        ]
    },
    // 快速找
    quicklyFind: {
        title: '快速查找，找企业，找团队，找业绩，找人才，找项目-',
        meta: [
            { name: 'keywords', content: '快速查找，找企业，找团队，找业绩，找人才，找项目，工程众创网' },
            { hid: 'description', name: 'description', content: '快速查找，找企业，找团队，找业绩，找人才，找项目，工程众创网' }
        ]
    },
    // 找团队
    'quicklyFind-team': {
        title: '众创空间入住团队，团队分类，工程众创网-',
        meta: [
            { name: 'keywords', content: '互联网服务，可研编制，建筑施工，标书制作，清单预算，BIM服务，建筑行业新材料，建筑行业新技术' },
            { hid: 'description', name: 'description', content: '工程众创网，入驻创业团队分类,为您提供工程类众包服务。' }
        ]
    },
    // 团队详情
    'company-team': {
        title: '众创空间入住团队，团队分类，工程众创网-',
        meta: [
            { name: 'keywords', content: '互联网服务，可研编制，建筑施工，标书制作，清单预算，BIM服务，建筑行业新材料，建筑行业新技术' },
            { hid: 'description', name: 'description', content: '工程众创网，入驻创业团队分类,为您提供工程类众包服务。' }
        ]
    },
    // 找企业
    'quicklyFind-company': {
        title: '建筑行业企业分类，建筑行业企业,工程众创网-',
        meta: [
            { name: 'keywords', content: '建筑行业企业，建筑设计院，招标代理公司，造价咨询公司，工程监理公司，施工图审公司，财务公司，工程审计公司，司法鉴定公司，建筑服务类公司，投融资机构，建筑材料公司' },
            { hid: 'description', name: 'description', content: '工程众创网，入驻的工程行业全产业链公司类型分类' }
        ]
    },
    // 企业详情
    'company-enterprise': {
        title: '建筑行业企业分类，建筑行业企业,工程众创网-',
        meta: [
            { name: 'keywords', content: '建筑行业企业，建筑设计院，招标代理公司，造价咨询公司，工程监理公司，施工图审公司，财务公司，工程审计公司，司法鉴定公司，建筑服务类公司，投融资机构，建筑材料公司' },
            { hid: 'description', name: 'description', content: '工程众创网，入驻的工程行业全产业链公司类型分类' }
        ]
    },
    // 找业绩
    'quicklyFind-performance': {
        title: '入驻企业业绩库，工程业绩搜索，工程业绩检索，工程众创网-',
        meta: [
            { name: 'keywords', content: '施工单位业绩，房建业绩，公路业绩，铁路业绩，水利水电业绩，电力工程业绩，矿山工程业绩，冶金工程业绩，市政公用业绩，通信工程业绩，园林绿化业绩，造价业绩，招标业绩，监理业绩，环评业绩，审计业绩，可研报告业绩' },
            { hid: 'description', name: 'description', content: '入驻企业业绩库查询检索，为您提供更方便的检索渠道。' }
        ]
    },
    // 业绩详情
    'quicklyFind-performance-info': {
        title: '入驻企业业绩库，工程业绩搜索，工程业绩检索，工程众创网-',
        meta: [
            { name: 'keywords', content: '施工单位业绩，房建业绩，公路业绩，铁路业绩，水利水电业绩，电力工程业绩，矿山工程业绩，冶金工程业绩，市政公用业绩，通信工程业绩，园林绿化业绩，造价业绩，招标业绩，监理业绩，环评业绩，审计业绩，可研报告业绩' },
            { hid: 'description', name: 'description', content: '入驻企业业绩库查询检索，为您提供更方便的检索渠道。' }
        ]
    },
    // 需要注册人员
    'quicklyFind-talent': {
        title: '需要注册人员，建筑工程人才，工程证书中介，证书挂靠，工程类证书-',
        meta: [
            { name: 'keywords', content: '需要注册人员，工程证书中介，工程类证书，挂靠，挂靠网，一级建造师挂靠，二级建造师挂靠，建造师挂靠，证书挂靠，注册造价师挂靠，建筑师，结构师，监理工程师' },
            { hid: 'description', name: 'description', content: '工程类企业人才，证书挂靠网，工程众创网' }
        ]
    },
    // 需要注册人员-详情
    'quicklyFind-talent-info': {
        title: '需要注册人员，建筑工程人才，工程证书中介，证书挂靠，工程类证书-',
        meta: [
            { name: 'keywords', content: '需要注册人员，工程证书中介，工程类证书，挂靠，挂靠网，一级建造师挂靠，二级建造师挂靠，建造师挂靠，证书挂靠，注册造价师挂靠，建筑师，结构师，监理工程师' },
            { hid: 'description', name: 'description', content: '工程类企业人才，证书挂靠网，工程众创网' }
        ]
    },
    // 找项目
    'quicklyFind-project': {
        title: '工程类项目发布，建筑类项目发布，建筑项目，工程项目，工程众创网-',
        meta: [
            { name: 'keywords', content: '工程信息网，项目，拟在建，在建，项目，招标，投标，建筑，设计，建材价格，市场调研' },
            { hid: 'description', name: 'description', content: '各类工程信息的收集与发布，提供工程行业免费发布工程信息的网站，工程众创网' }
        ]
    },
    // 找项目详情
    'quicklyFind-project-info': {
        title: '工程类项目发布，建筑类项目发布，建筑项目，工程项目，工程众创网-',
        meta: [
            { name: 'keywords', content: '工程信息网，项目，拟在建，在建，项目，招标，投标，建筑，设计，建材价格，市场调研' },
            { hid: 'description', name: 'description', content: '各类工程信息的收集与发布，提供工程行业免费发布工程信息的网站，工程众创网' }
        ]
    },
    // 找办公
    'quicklyFind-work': {
        title: '众创空间办公位出租信息，免费发布工位求租信息，工程众创网-',
        meta: [
            { name: 'keywords', content: '众创空间，工位出租，办公工位出租，众创空间工位出租，出租，办公桌出租' },
            { hid: 'description', name: 'description', content: '各大众创空间办公工位出租与求租信息免费发布，工程众创网。' }
        ]
    },
    // 办公详情
    'quicklyFind-work-info': {
        title: '众创空间办公位出租信息，免费发布工位求租信息，工程众创网-',
        meta: [
            { name: 'keywords', content: '众创空间，工位出租，办公工位出租，众创空间工位出租，出租，办公桌出租' },
            { hid: 'description', name: 'description', content: '各大众创空间办公工位出租与求租信息免费发布，工程众创网。' }
        ]
    },
    joinCompany: {
        title: '工程类公司加盟信息免费发布，公司企业黄页实力展示，工程众创网-',
        meta: [
            { name: 'keywords', content: '招标代理加盟，造价咨询加盟，资质合作，资质加盟，建筑资质加盟，资质合作，建筑资质合作，工程类企业分公司开设。' },
            { hid: 'description', name: 'description', content: '加盟网，建筑类企业加盟信息发布网站，建筑类公司资质展示，工程众创网' }
        ]
    },
    'joinCompany-info': {
        title: '工程类公司加盟信息免费发布，公司企业黄页实力展示，工程众创网-',
        meta: [
            { name: 'keywords', content: '招标代理加盟，造价咨询加盟，资质合作，资质加盟，建筑资质加盟，资质合作，建筑资质合作，工程类企业分公司开设。' },
            { hid: 'description', name: 'description', content: '加盟网，建筑类企业加盟信息发布网站，建筑类公司资质展示，工程众创网' }
        ]
    },
    // 需要干活团队-列表
    workTeam: {
        title: '需要干活团队，工程众创网-',
        meta: [
            { name: 'keywords', content: '需要干活团队，可研报告，标书制作，做设计图，BIM建模，清单算量' },
            { hid: 'description', name: 'description', content: '需要干活团队，工程领域的专业团队，有项目找工程众创' }
        ]
    },
    // 需要干活团队-详情
    'workTeam-info': {
        title: '需要干活团队，工程众创网-',
        meta: [
            { name: 'keywords', content: '需要干活团队，可研报告，标书制作，做设计图，BIM建模，清单算量' },
            { hid: 'description', name: 'description', content: '需要干活团队，工程领域的专业团队，有项目找工程众创' }
        ]
    },
    // 需要合作公司-列表
    coopCompany: {
        title: '需要合作公司-',
        meta: [
            { name: 'keywords', content: '需要合作公司，工程可研，勘察设计，招标，造价，监理，施工，审计，全过程工程咨询' },
            { hid: 'description', name: 'description', content: '需要合作公司，工程行业的领头公司，资质齐全，可对接各种项目，满足大中小企业的项目需求' }
        ]
    },
    // 需要合作公司-详情
    'coopCompany-info': {
        title: '需要合作公司-',
        meta: [
            { name: 'keywords', content: '需要合作公司，工程可研，勘察设计，招标，造价，监理，施工，审计，全过程工程咨询' },
            { hid: 'description', name: 'description', content: '需要合作公司，工程行业的领头公司，资质齐全，可对接各种项目，满足大中小企业的项目需求' }
        ]
    },
    // 一站委托
    entrust: {
        title: '一站委托，委托平台，委托工程众创网-',
        meta: [
            { name: 'keywords', content: '工程众创，工程众创网，工程众创网，众创工场，众创空间，工程项目，招投标信息，资质查询，业绩查询 ，建筑，建筑服务平台,建筑工程,建筑工程项目,工程咨询,建筑项目,工程建筑,工程咨询服务,建筑工程咨询' },
            { hid: 'description', name: 'description', content: '建设工程全产业链“一站式”服务平台，免费发布、精准查询工程项目、招标信息、企业资质、企业业绩 、加盟合作及工程人才供需信息，打造工程领域信息交流，高效服务的交互平台' }
        ]
    },
    // 委托发布
    'entrust-from': {
        title: '委托发布，项目委托，加盟委托，官方委托，拓展分支机构委托-',
        meta: [
            { name: 'keywords', content: '工程众创，工程众创网，工程众创网，众创工场，众创空间，工程项目，招投标信息，资质查询，业绩查询 ，建筑，建筑服务平台,建筑工程,建筑工程项目,工程咨询,建筑项目,工程建筑,工程咨询服务,建筑工程咨询' },
            { hid: 'description', name: 'description', content: '建设工程全产业链“一站式”服务平台，免费发布、精准查询工程项目、招标信息、企业资质、企业业绩 、加盟合作及工程人才供需信息，打造工程领域信息交流，高效服务的交互平台' }
        ]
    },
    // 招投标主页
    tenderSquare: {
        title: '工程众创网最新招标信息公布，全天持续更新信息，免费查询。欢迎登陆工程众创网-',
        meta: [
            { name: 'keywords', content: '招标网，招标，招投标，招标信息，招标公告，招标预告' },
            { hid: 'description', name: 'description', content: '招标公告发布，每日更新各个入驻企业的招标信息，及时发布公告。' }
        ]
    },
    // 招标公告
    'tenderSquare-tenderNotice': {
        title: '招标公告 工程众创网最新招标信息公布，全天持续更新信息，免费查询。欢迎登陆工程众创网-',
        meta: [
            { name: 'keywords', content: '招标网，招标，招投标，招标信息，招标公告，招标预告' },
            { hid: 'description', name: 'description', content: '招标公告发布，每日更新各个入驻企业的招标信息，及时发布公告。' }
        ]
    },
    // 变更公告
    'tenderSquare-changeNotice': {
        title: '变更公告 工程众创网最新招标信息公布，全天持续更新信息，免费查询。欢迎登陆工程众创网-',
        meta: [
            { name: 'keywords', content: '招标网，招标，招投标，招标信息，招标公告，招标预告' },
            { hid: 'description', name: 'description', content: '招标公告发布，每日更新各个入驻企业的招标信息，及时发布公告。' }
        ]
    },
    // 中标公告
    'tenderSquare-bidNotice': {
        title: '中标公告 工程众创网最新招标信息公布，全天持续更新信息，免费查询。欢迎登陆工程众创网-',
        meta: [
            { name: 'keywords', content: '招标网，招标，招投标，招标信息，招标公告，招标预告' },
            { hid: 'description', name: 'description', content: '招标公告发布，每日更新各个入驻企业的招标信息，及时发布公告。' }
        ]
    },
    // 公告详情
    'tenderSquare-info': {
        title: '工程众创网最新招标信息公布，全天持续更新信息，免费查询。欢迎登陆工程众创网-',
        meta: [
            { name: 'keywords', content: '招标网，招标，招投标，招标信息，招标公告，招标预告' },
            { hid: 'description', name: 'description', content: '招标公告发布，每日更新各个入驻企业的招标信息，及时发布公告。' }
        ]
    },
    free: {
        title: '免费发布，工程行业免费发布需求-',
        meta: [
            { name: 'keywords', content: '需要加盟公司，需要干活团队（可研报告，标书制作，做设计图，BIM建模，清单算量），需要合作公司（工程可研，勘察设计，招标，造价，监理，施工，审计，全过程工程咨询），其他（人才招聘，人才求职，办公出租，办公求租），委托平台（委托项目、委托加盟、委托拓展分支机构）' },
            { hid: 'description', name: 'description', content: '工程众创网，专业的工程信息发布及交流平台，欢迎各种工程行业从业者及企业来我平台发布需求信息' }
        ]
    },
    'free-league': {
        title: '免费发布，需要加盟公司-',
        meta: [
            { name: 'keywords', content: '需要加盟公司，需要干活团队（可研报告，标书制作，做设计图，BIM建模，清单算量），需要合作公司（工程可研，勘察设计，招标，造价，监理，施工，审计，全过程工程咨询），其他（人才招聘，人才求职，办公出租，办公求租），委托平台（委托项目、委托加盟、委托拓展分支机构）' },
            { hid: 'description', name: 'description', content: '工程众创网，专业的工程信息发布及交流平台，欢迎各种工程行业从业者及企业来我平台发布需求信息' }
        ]
    },
    'free-team': {
        title: '免费发布，需要干活团队-',
        meta: [
            { name: 'keywords', content: '需要加盟公司，需要干活团队（可研报告，标书制作，做设计图，BIM建模，清单算量），需要合作公司（工程可研，勘察设计，招标，造价，监理，施工，审计，全过程工程咨询），其他（人才招聘，人才求职，办公出租，办公求租），委托平台（委托项目、委托加盟、委托拓展分支机构）' },
            { hid: 'description', name: 'description', content: '工程众创网，专业的工程信息发布及交流平台，欢迎各种工程行业从业者及企业来我平台发布需求信息' }
        ]
    },
    'free-company': {
        title: '免费发布，需要合作公司-',
        meta: [
            { name: 'keywords', content: '需要加盟公司，需要干活团队（可研报告，标书制作，做设计图，BIM建模，清单算量），需要合作公司（工程可研，勘察设计，招标，造价，监理，施工，审计，全过程工程咨询），其他（人才招聘，人才求职，办公出租，办公求租），委托平台（委托项目、委托加盟、委托拓展分支机构）' },
            { hid: 'description', name: 'description', content: '工程众创网，专业的工程信息发布及交流平台，欢迎各种工程行业从业者及企业来我平台发布需求信息' }
        ]
    },
    'free-Recruiting': {
        title: '免费发布，人才招聘-',
        meta: [
            { name: 'keywords', content: '需要加盟公司，需要干活团队（可研报告，标书制作，做设计图，BIM建模，清单算量），需要合作公司（工程可研，勘察设计，招标，造价，监理，施工，审计，全过程工程咨询），其他（人才招聘，人才求职，办公出租，办公求租），委托平台（委托项目、委托加盟、委托拓展分支机构）' },
            { hid: 'description', name: 'description', content: '工程众创网，专业的工程信息发布及交流平台，欢迎各种工程行业从业者及企业来我平台发布需求信息' }
        ]
    },
    'free-objective': {
        title: '免费发布，人才求职-',
        meta: [
            { name: 'keywords', content: '需要加盟公司，需要干活团队（可研报告，标书制作，做设计图，BIM建模，清单算量），需要合作公司（工程可研，勘察设计，招标，造价，监理，施工，审计，全过程工程咨询），其他（人才招聘，人才求职，办公出租，办公求租），委托平台（委托项目、委托加盟、委托拓展分支机构）' },
            { hid: 'description', name: 'description', content: '工程众创网，专业的工程信息发布及交流平台，欢迎各种工程行业从业者及企业来我平台发布需求信息' }
        ]
    },
    'free-lease': {
        title: '免费发布，办公出租-',
        meta: [
            { name: 'keywords', content: '需要加盟公司，需要干活团队（可研报告，标书制作，做设计图，BIM建模，清单算量），需要合作公司（工程可研，勘察设计，招标，造价，监理，施工，审计，全过程工程咨询），其他（人才招聘，人才求职，办公出租，办公求租），委托平台（委托项目、委托加盟、委托拓展分支机构）' },
            { hid: 'description', name: 'description', content: '工程众创网，专业的工程信息发布及交流平台，欢迎各种工程行业从业者及企业来我平台发布需求信息' }
        ]
    },
    'free-office': {
        title: '免费发布，办公求租-',
        meta: [
            { name: 'keywords', content: '需要加盟公司，需要干活团队（可研报告，标书制作，做设计图，BIM建模，清单算量），需要合作公司（工程可研，勘察设计，招标，造价，监理，施工，审计，全过程工程咨询），其他（人才招聘，人才求职，办公出租，办公求租），委托平台（委托项目、委托加盟、委托拓展分支机构）' },
            { hid: 'description', name: 'description', content: '工程众创网，专业的工程信息发布及交流平台，欢迎各种工程行业从业者及企业来我平台发布需求信息' }
        ]
    },
    aboutUs: {
        title: '工程众创网-工程领域全产业链信息交流互动平台-',
        meta: [
            { name: 'keywords', content: '工程众创,工程众创网,工程众创网,众创工厂,众创空间,工程项目信息,招投标信息,资格查询,业绩查询' },
            { hid: 'description', name: 'description', content: '工程众创网全面的工程领域信息交流平台,可免费发布与查看工程行业各类信息资讯' }
        ]
    },
    question: {
        title: '一站委托，委托平台，委托工程众创网-',
        meta: [
            { name: 'keywords', content: '工程众创，工程众创网，工程众创网，众创工场，众创空间，工程项目，招投标信息，资质查询，业绩查询 ，建筑，建筑服务平台,建筑工程,建筑工程项目,工程咨询,建筑项目,工程建筑,工程咨询服务,建筑工程咨询' },
            { hid: 'description', name: 'description', content: '建设工程全产业链“一站式”服务平台，免费发布、精准查询工程项目、招标信息、企业资质、企业业绩 、加盟合作及工程人才供需信息，打造工程领域信息交流，高效服务的交互平台' }
        ]
    },
    // 热门问答
    hotAnswers: {
        title: '热门问答-',
        meta: [
            { name: 'keywords', content: '热门问答，提问回答，有问题就上工程众创网' },
            { hid: 'description', name: 'description', content: '工程建筑行热门问答，热门问题，尽在工程众创网' }
        ]
    },
    // 热门问答详情
    hotAnswersInfo: {
        title: '热门问答-',
        meta: [
            { name: 'keywords', content: '热门问答，提问回答，有问题就上工程众创网' },
            { hid: 'description', name: 'description', content: '工程建筑行热门问答，热门问题，尽在工程众创网' }
        ]
    },
    // 广告天地
    advertising: {
        title: '广告天地-',
        meta: [
            { name: 'keywords', content: '工程公司，工程团队，免费的广告位，自由宣传' },
            { hid: 'description', name: 'description', content: '工程行业的广告，全工程行业的免费广告位，，工程行业人的免费广告位' }
        ]
    },
    // 广告天地详情
    advertisingInfo: {
        title: '广告天地-',
        meta: [
            { name: 'keywords', content: '工程公司，工程团队，免费的广告位，自由宣传' },
            { hid: 'description', name: 'description', content: '工程行业的广告，全工程行业的免费广告位，，工程行业人的免费广告位' }
        ]
    },
    // 知识学习
    knowledge: {
        title: '知识学习-',
        meta: [
            { name: 'keywords', content: '工程行业人的知识天地，行业新闻，行业知识点，都在知识学习中' },
            { hid: 'description', name: 'description', content: '知识学习，工程行业知识点，全工程类行业知识点' }
        ]
    }
}

