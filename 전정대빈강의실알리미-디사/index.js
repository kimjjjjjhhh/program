var currentState = 'main'; // 'main', 'roomInput', 'scheduleDisplay', 'locationInfo'

// 뒤로가기 함수
function goBack() {
    // 현재 상태에 따라 이전 상태로 돌아가도록 구현
    switch (currentState) {
        case 'roomInput':
        case 'scheduleDisplay':
        case 'locationInfo':
        case 'roomstate':
            // 현재 강의실 입력, 강의실 시간표, 장소 정보 표시 상태이면 메인 화면으로
            clearInterval();
            document.getElementById('main').style.display = 'initial';
            document.getElementById('roomInput').style.display = 'none';
            document.getElementById('scheduleDisplay').style.display = 'none';
            document.getElementById('locationInfo').style.display = 'none';
            document.getElementById('roomstate').style.display = 'none';
            document.getElementById('backButton').style.display = 'none';
            document.getElementById('floorImage').style.display = 'none';
            currentState = 'main';
    }
}

var class_schedule = {
    '101': {
        '월요일': ['09:00 ~ 11:45', '13:00 ~ 17:45'],
        '화요일': ['09:00 ~ 10:15', '12:00 ~ 13:15', '15:00 ~ 16:15', '18:00 ~ 18:50'],
        '수요일': ['09:00 ~ 11:45', '13:00 ~ 17:45'],
        '목요일': ['09:00 ~ 10:15', '12:00 ~ 13:15', '15:00 ~ 16:15'],
        '금요일': ['09:00 ~ 11:45', '13:30 ~ 16:15']
    },
    '102': {
        '월요일': ['09:00 ~ 11:45', '13:30 ~ 17:45'],
        '화요일': ['09:00 ~ 17:45'],
        '수요일': ['09:00 ~ 11:45', '13:30 ~ 17:45'],
        '목요일': ['09:00 ~ 17:45'],
        '금요일': ['09:00 ~ 11:45', '13:30 ~ 16:15']
    },
    '103': {
        '월요일': ['10:30 ~ 11:45', '13:00 ~ 14:50'],
        '화요일': ['09:00 ~ 16:15'],
        '수요일': ['10:30 ~ 11:45', '13:00 ~ 14:50'],
        '목요일': ['09:00 ~ 16:15'],
        '금요일': ['10:00 ~ 11:50']
    },
    '136': {
        '월요일': ['10:30 ~ 11:45', '13:30 ~ 14:50', '16:30 ~ 17:45'],
        '화요일': ['10:30 ~ 11:45', '13:30 ~ 17:45'],
        '수요일': ['10:30 ~ 11:45', '13:30 ~ 14:50', '16:30 ~ 17:45'],
        '목요일': ['10:30 ~ 11:45', '13:30 ~ 17:45'],
        '금요일': ['09:00 ~ 15:50']
    },
    '205': {
        '월요일': ['13:00 ~ 14:50', '16:00 ~ 18:50'],
        '화요일': ['09:00 ~ 10:15', '13:00 ~ 18:50'],
        '수요일': ['13:00 ~ 14:50', '16:00 ~ 20:45'],
        '목요일': ['09:00 ~ 10:15', '13:00 ~ 17:45'],
        '금요일': ['10:00 ~ 11:50', '15:00 ~ 17:45']
    },
    '208': {
        '월요일': ['09:00 ~ 12:50'],
        '화요일': [],
        '수요일': ['13:30 ~ 17:20'],
        '목요일': [],
        '금요일': ['09:00 ~ 11:45', '13:30 ~ 17:20']
    },
    '211-1': {
        '월요일': ['13:00 ~ 14:50', '16:30 ~ 17:45'],
        '화요일': ['09:00 ~ 11:45', '13:00 ~ 17:45'],
        '수요일': ['13:00 ~ 14:50', '16:30 ~ 17:45'],
        '목요일': ['09:00 ~ 11:45', '13:00 ~ 17:45'],
        '금요일': ['09:00 ~ 11:45', '15:00 ~ 17:45']
    },
    '211-2': {
        '월요일': ['18:00 ~ 18:50'],
        '화요일': ['10:30 ~ 11:45', '15:00 ~ 16:15', '18:00 ~ 18:50'],
        '수요일': ['18:00 ~ 18:50'],
        '목요일': ['10:30 ~ 11:45', '15:00 ~ 16:15'],
        '금요일': ['12:00 ~ 14:45']
    },
    '211-3': {  
        '월요일': [],
        '화요일': [],
        '수요일': ['18:00 ~ 20:45'],
        '목요일': ['18:00 ~ 20:45'],
        '금요일': ['12:00 ~ 20:45']
    },
    '217': {
        '월요일': ['10:30 ~ 17:45'],
        '화요일': ['09:00 ~ 14:20'],
        '수요일': ['10:30 ~ 17:45'],
        '목요일': ['11:00 ~ 14:20'],
        '금요일': []
    },
    '218': {
        '월요일': ['10:30 ~ 11:45', '13:00 ~ 14:45', '16:30 ~ 18:00'],
        '화요일': [],
        '수요일': ['10:30 ~ 11:45', '13:00 ~ 14:45', '16:30 ~ 18:50'],
        '목요일': [],
        '금요일': []
    },
    '219': {
        '월요일': ['10:00 ~ 11:15', '12:00 ~ 13:15', '15:00 ~ 16:15', '18:00 ~ 18:50'],
        '화요일': ['09:00 ~ 14:45', '16:00 ~ 17:15', '18:00 ~ 19:15'],
        '수요일': ['10:00 ~ 11:15', '12:00 ~ 13:15', '15:00 ~ 16:15', '18:00 ~ 18:50'],
        '목요일': ['09:00 ~ 14:45', '16:00 ~ 17:15', '18:00 ~ 19:15'],
        '금요일': ['18:00 ~ 19:50']
    },
    '220': {
        '월요일': ['09:00 ~ 13:15', '15:00 ~ 16:15'],
        '화요일': [],
        '수요일': ['09:00 ~ 17:45'],
        '목요일': ['09:00 ~ 13:15', '15:00 ~ 16:15'],
        '금요일': ['09:00 ~ 17:45']
    },
    '221': {
        '월요일': ['10:00 ~ 11:15', '12:00 ~ 13:15', '15:00 ~ 16:15'],
        '화요일': ['10:30 ~ 14:45', '16:30 ~ 18:20'],
        '수요일': ['10:30 ~ 11:45', '13:30 ~ 14:45'],
        '목요일': ['10:30 ~ 14:45'],
        '금요일': ['09:00 ~ 14:45']
    },
    '223': {
        '월요일': ['09:00 ~ 11:45'],
        '화요일': ['10:30 ~ 16:15'],
        '수요일': ['09:00 ~ 11:45'],
        '목요일': ['10:30 ~ 16:15'],
        '금요일': ['12:00 ~ 14:45']
    },
    '226': {
        '월요일': ['09:00 ~ 10:15', '12:00 ~ 13:15', '15:00 ~ 17:45'],
        '화요일': [],
        '수요일': ['09:00 ~ 10:15', '12:00 ~ 13:15', '15:00 ~ 17:45'],
        '목요일': [],
        '금요일': ['09:00 ~ 16:15']
    },
    '227': {
        '월요일': ['09:00 ~ 14:45'],
        '화요일': ['09:00 ~ 11:45', '13:30 ~ 17:45'],
        '수요일': ['09:00 ~ 14:45', '18:00 ~ 18:50'],
        '목요일': ['09:00 ~ 11:45', '13:30 ~ 17:45'],
        '금요일': []
    },
    '445': {
        '월요일': ['09:00 ~ 13:15', '15:00 ~ 17:45'],
        '화요일': ['09:00 ~ 13:15', '15:00 ~ 17:45'],
        '수요일': ['09:00 ~ 13:15', '15:00 ~ 17:45'],
        '목요일': ['09:00 ~ 13:15', '15:00 ~ 17:45'],
        '금요일': ['10:30 ~ 13:15']
    },
    '539': {
        '월요일': ['10:30 ~ 11:45', '15:00 ~ 16:15'],
        '화요일': ['10:30 ~ 11:45', '15:00 ~ 16:15'],
        '수요일': ['10:30 ~ 11:45', '15:00 ~ 16:15'],
        '목요일': ['10:30 ~ 11:45', '15:00 ~ 16:15'],
        '금요일': []
    },
    'B01': {
        '월요일': ['09:00 ~ 11:50'],
        '화요일': ['13:00 ~ 16:50'],
        '수요일': ['13:00 ~ 16:50'],
        '목요일': ['09:00 ~ 11:50'],
        '금요일': ['09:00 ~ 17:45'],
    },
    'B05': {
        '월요일': ['13:00 ~ 14:50'],
        '화요일': ['10:30 ~ 11:45', '13:00 ~ 17:45'],
        '수요일': ['13:00 ~ 14:50'],
        '목요일': ['10:30 ~ 11:45', '13:00 ~ 14:50'],
        '금요일': []
    },
    'B06': {
        '월요일': ['10:00 ~ 11:50', '16:30 ~ 17:45'],
        '화요일': ['12:00 ~ 13:50', '15:00 ~ 16:50'],
        '수요일': ['10:00 ~ 11:50', '16:30 ~ 17:45'],
        '목요일': ['12:00 ~ 13:50', '15:00 ~ 16:50'],
        '금요일': ['15:00 ~ 20:45'],
    },
    'B07': {
        '월요일': ['13:30 ~ 14:45'],
        '화요일': ['09:00 ~ 12:50', '17:00 ~ 19:45'],
        '수요일': ['09:00 ~ 12:50', '13:30 ~ 14:45', '18:00 ~ 19:50'],
        '목요일': ['09:00 ~ 12:50'],
        '금요일': ['15:00 ~ 17:45'],
    },
    'B09': {
        '월요일': ['08:00 ~ 08:50', '15:00 ~ 18:20'],
        '화요일': ['09:00 ~ 21:45'],
        '수요일': ['11:00 ~ 12:50', '13:30 ~ 18:20'],
        '목요일': ['09:00 ~ 17:45'],
        '금요일': ['09:00 ~ 12:50', '13:30 ~ 14:45'],
    }
};
var nonClassroom = {
    'B03': {
        '이름': 'AI 오픈랩'
    },
    'B08': {
        '이름': 'SW중심대학 사업단'
    },
    '104': {
        '이름': '자연과학종합연구원'
    },
    '105': {
        '이름': '청정실'
    },
    '106': {
        '이름': '자연과학종합연구원-수리계산센터'
    },
    '107-1': {
        '이름': '소프트웨어융합학과 오픈랩'
    },
    '107-2': {
        '이름': '일반인공지능연구실'
    },
    '109': {
        '이름': '자연과학종합연구원'
    },
    '111': {
        '이름': '열람실'
    },
    '113': {
        '이름': '나노에너지소자연구실'
    },
    '113-1': {
        '이름': 'CDC실'
    },
    '114': {
        '이름': '생체의공학 학생회'
    },
    '115': {
        '이름': '현대물리실험실(암실)'
    },
    '116': {
        '이름': '우주과학학생회'
    },
    '117': {
        '이름': '물성물리실험실'
    },
    '118': {
        '이름': '터 (동아리방)'
    },
    '119': {
        '이름': '물성물리실험 준비실'
    },
    '120': {
        '이름': '전자정보대학학생회'
    },
    '121': {
        '이름': '수위실'
    },
    '122': {
        '이름': '광전자 및 응용과학 연구실'
    },
    '122-1': {
        '이름': '중시계 양자전도 연구실'
    },
    '123': {
        '이름': '양자광학 연구실'
    },
    '125': {
        '이름': '전자물리실험실'
    },
    '127': {
        '이름': '전자물리실험준비실'
    },
    '129': {
        '이름': '반도체소자연구실'
    },
    '131': {
        '이름': '공작실1'
    },
    '133': {
        '이름': '물성계산연구실'
    },
    '135': {
        '이름': '물리 및 응용물리전공 학생회실'
    },
    '137': {
        '이름': '무한상상공간'
    },
    '138': {
        '이름': '수학 및 응용수학전공 학생회'
    },
    '139': {
        '이름': '반도체물성연구실'
    },
    '140': {
        '이름': '반도체광공학연구실'
    },
    '141-1': {
        '이름': '나노소자 연구실'
    },
    '141-2': {
        '이름': '나노융합재료 및 소자물리연구실'
    },
    '201': {
        '이름': '전자정보대학 학장실'
    },
    '202': {
        '이름': '산학협력중점교수 연구실'
    },
    '202-1': {
        '이름': 'International Scholar 실1'
    },
    '203': {
        '이름': '전자정보대학 행정실 / 소프트웨어융합대학 행정실'
    },
    '203-2': {
        '이름': '응용과학대학 행정실'
    },
    '203-3': {
        '이름': '응용과학대학 학장실'
    },
    '204': {
        '이름': '교수휴게실'
    },
    '206': {
        '이름': 'EE Lab-O'
    },
    '207': {
        '이름': '바이오메디칼오픈랩'
    },
    '209': {
        '이름': '바이오메디칼창의랩'
    },
    '213': {
        '이름': ' '
    },
    '215': {
        '이름': '수리계산연습실'
    },
    '225': {
        '이름': '천체계산실험실'
    },
    '229': {
        '이름': '우주과학실험실'
    },
    '229-1': {
        '이름': '글로벌SW융합연구소'
    },
    '233': {
        '이름': '세상밖으로 (동아리방)'
    },
    '235': {
        '이름': '해오름 (동아리방)'
    },
    '237': {
        '이름': 'RaCos (동아리방)'
    },
    '239': {
        '이름': ' Chaos (동아리방)'
    },
    '240': {
        '이름': '소프트웨어융합대학 학생회실 / 컴퓨터공학부 학생회실'
    },
    '241': {
        '이름': 'Software Gallery'
    },
    '242': {
        '이름': 'MARO (동아리방)'
    },
    '244': {
        '이름': '호연지기 (동아리방)'
    },
    '246': {
        '이름': 'W.W.W (동아리방)'
    },
    '248': {
        '이름': '얼리버드 (동아리방)'
    },
    '249': {
        '이름': 'N.E.T(동아리방)'
    },
    '250': {
        '이름': '돌쇠(동아리방)'
    },
    '301': {
        '이름': '조진성 교수연구실'
    },
    '303': {
        '이름': '홍충선 교수연구실'
    },
    '305': {
        '이름': '정태충 교수연구실'
    },
    '307': {
        '이름': '이승규 교수연구실'
    },
    '309': {
        '이름': '세미나실'
    },
    '310-1': {
        '이름': '나노바이오 연구실'
    },
    '310-2': {
        '이름': '데이터분석 및 시각지능연구실'
    },
    '311': {
        '이름': '한치근 교수연구실'
    },
    '313': {
        '이름': '허의남 교수연구실'
    },
    '314': {
        '이름': '강형엽 교수연구실'
    },
    '315': {
        '이름': '이영구 교수연구실'
    },
    '316': {
        '이름': '대학원생 연구실'
    },
    '317': {
        '이름': '유인태 교수연구실'
    },
    '318': {
        '이름': '황효석 교수연구실'
    },
    '319': {
        '이름': '전석희 교수연구실'
    },
    '320': {
        '이름': 'IIIXR 연구실'
    },
    '321': {
        '이름': '박광훈 교수연구실'
    },
    '322': {
        '이름': '햅틱스 가상현실 연구실'
    },
    '323': {
        '이름': '이성원 교수연구실'
    },
    '323-1': {
        '이름': '인공지능융합혁신 인재양성사업단'
    },
    '324': {
        '이름': '비전 및 학습 연구실'
    },
    '325-1': {
        '이름': '비전 및 학습연구실'
    },
    '325-2': {
        '이름': '디지털회로 실험실'
    },
    '325-3': {
        '이름': '배성호 교수연구실'
    },
    '325-4': {
        '이름': '박경문 교수연구실'
    },
    '326': {
        '이름': 'NRF 기초연구실'
    },
    '327': {
        '이름': '컴퓨터구조 및 VLSI 연구실1'
    },
    '329': {
        '이름': 'Inno Gallery'
    },
    '330-1': {
        '이름': '실시간 모바일 클라우드 운영실'
    },
    '330-2': {
        '이름': '컴퓨터구조 및 VLSI 연구실2'
    },
    '331': {
        '이름': '실시간 모바일 클라우드 연구센터'
    },
    '332': {
        '이름': 'WINS 연구실'
    },
    '333': {
        '이름': '전파통신 실험실1'
    },
    '335': {
        '이름': '디지털통신 연구실'
    },
    '336': {
        '이름': '전파무반사측정 실험실'
    },
    '337': {
        '이름': '대학원생 공동 연구실'
    },
    '337-1': {
        '이름': '에너지&포토닉스 제어 연구실'
    },
    '338': {
        '이름': '전파통신실험실2'
    },
    '339': {
        '이름': '데이터베이스 연구실'
    },
    '341': {
        '이름': '컴퓨터비전 및 인식연구실'
    },
    '345': {
        '이름': '영상미디어연구실'
    },
    '347': {
        '이름': '알고리즘 연구실'
    },
    '348': {
        '이름': '임베디드 시스템 실습실'
    },
    '349': {
        '이름': '데이터 및 지식공학 연구실'
    },
    '350': {
        '이름': '머신러닝 및 비주얼컴퓨팅 연구실'
    },
    '351': {
        '이름': '증강현실 연구실'
    },
    '352': {
        '이름': '지능네트워킹 연구실'
    },
    '401': {
        '이름': '김대원 교수연구실'
    },
    '403': {
        '이름': '박욱 교수연구실'
    },
    '405': {
        '이름': '김상혁 교수연구실'
    },
    '407': {
        '이름': '홍상훈 교수연구실'
    },
    '408': {
        '이름': '최승규 교수연구실'
    },
    '409': {
        '이름': '세미나실'
    },
    '410': {
        '이름': '최기호 교수연구실'
    },
    '411': {
        '이름': 'Quantum Computing Lab'
    },
    '412-1': {
        '이름': '응용수학 연구실'
    },
    '412-2': {
        '이름': '수학교구실'
    },
    '413': {
        '이름': '최선호 교수연구실'
    },
    '414': {
        '이름': '수학연습실'
    },
    '415': {
        '이름': 'Math Modeling and Analysis Lab'
    },
    '416': {
        '이름': '고한얼 교수연구실'
    },
    '417': {
        '이름': 'Math biology Lab'
    },
    '418': {
        '이름': '지능형무선네트워크 연구실'
    },
    '419': {
        '이름': '금융수학 연구실'
    },
    '421': {
        '이름': '진화역학 연구실'
    },
    '423': {
        '이름': '한창용 교수연구실'
    },
    '425': {
        '이름': '김혜현 교수연구실'
    },
    '426': {
        '이름': '송현욱 교수연구실'
    },
    '427': {
        '이름': '이종수 교수연구실'
    },
    '428': {
        '이름': '손종역 교수연구실'
    },
    '429': {
        '이름': '이성훈 교수연구실'
    },
    '430': {
        '이름': '김선경 교수연구실'
    },
    '431': {
        '이름': '이광조 교수연구실'
    },
    '432': {
        '이름': '이민철 교수연구실'
    },
    '433': {
        '이름': '임대영 교수연구실'
    },
    '434': {
        '이름': '이호선 교수연구실'
    },
    '435': {
        '이름': '이은상 교수연구실'
    },
    '436': {
        '이름': '자연어처리 연구실'
    },
    '437': {
        '이름': '우주플라즈마 연구실'
    },
    '439-1': {
        '이름': '유전자발현 조절 연구실1'
    },
    '439-2': {
        '이름': '유전자발현 조절 연구실2'
    },
    '441': {
        '이름': 'PCB 가공실'
    },
    '442': {
        '이름': '건강노화 한의학 연구실2'
    },
    '443-1': {
        '이름': 'AIR연구실'
    },
    '443-2': {
        '이름': '김휘용 교수연구실'
    },
    '446': {
        '이름': '영양면역학 실험실'
    },
    '444': {
        '이름': ' '
    },
    '447': {
        '이름': '한방면역학 실험실'
    },
    '448': {
        '이름': '항노화 소재 연구실'
    },
    '449': {
        '이름': '영양생화학 실험실'
    },
    '449-1': {
        '이름': '염증노화제어 실험실'
    },
    '451': {
        '이름': '공동기기실3'
    },
    '453': {
        '이름': '공동기기실2'
    },
    '455': {
        '이름': '동물실'
    },
    '457': {
        '이름': '공동기기실1'
    },
    '459': {
        '이름': '저온실'
    },
    '461': {
        '이름': '의학영양학과 공공기기실'
    },
    '463': {
        '이름': '세포노화 병리 연구실1'
    },
    '465': {
        '이름': '건강노화 신경과학 연구실'
    },
    '466': {
        '이름': '세포노화 병리 연구실2'
    },
    '467': {
        '이름': '생리학 연구실1'
    },
    '468': {
        '이름': '생리학 연구실2'
    },
    '469': {
        '이름': '세포노화 병리 연구실3'
    },
    '470': {
        '이름': '생기능성분자소재 연구실1'
    },
    '471': {
        '이름': '생기능성분자소재 연구실2'
    },
    '473': {
        '이름': '건강노화 한의학 연구실3'
    },
    '501': {
        '이름': '김규헌 교수연구실'
    },
    '503': {
        '이름': '유재수 교수연구실'
    },
    '505': {
        '이름': '이계산 교수연구실'
    },
    '507': {
        '이름': '예윤해 교수연구실'
    },
    '508': {
        '이름': '증강지능 연구실'
    },
    '509': {
        '이름': '세미나실'
    },
    '510': {
        '이름': '미디어랩2'
    },
    '511': {
        '이름': '김윤희 교수연구실'
    },
    '512': {
        '이름': '웨어러블융합전자 연구실'
    },
    '513': {
        '이름': '신현동 교수연구실'
    },
    '514': {
        '이름': '정해준 교수연구실'
    },
    '515': {
        '이름': '김진상 교수연구실'
    },
    '516': {
        '이름': '이응규 교수연구실'
    },
    '517': {
        '이름': '김원하 교수연구실'
    },
    '518': {
        '이름': '장민환 교수연구실'
    },
    '519': {
        '이름': '장익준 교수연구실'
    },
    '520': {
        '이름': ' '
    },
    '521': {
        '이름': '손원 교수연구실'
    },
    '523': {
        '이름': '홍인기 교수연구실'
    },
    '525': {
        '이름': '김정근 교수연구실'
    },
    '526': {
        '이름': 'BK21 및 위성사업 행정실'
    },
    '527': {
        '이름': '최광선 교수연구실'
    },
    '528': {
        '이름': '신진인력 연구실'
    },
    '529': {
        '이름': '선종호 교수연구실'
    },
    '530': {
        '이름': '한신찬 교수연구실'
    },
    '531': {
        '이름': '박수종 교수연구실'
    },
    '532': {
        '이름': 'Telsuya Magara 교수연구실'
    },
    '533': {
        '이름': '전명원 교수연구실'
    },
    '534': {
        '이름': '박종호 교수연구실'
    },
    '535': {
        '이름': '이동훈 교수연구실'
    },
    '536': {
        '이름': '최윤영 교수연구실'
    },
    '537': {
        '이름': '문용재 교수연구실'
    },
    '541': {
        '이름': '고주파회로 및 시스템 연구실'
    },
    '542': {
        '이름': '차세대무선통신 연구실'
    },
    '542-1': {
        '이름': '전자,통신 신뢰성 연구센터'
    },
    '543': {
        '이름': '무선기술 연구실'
    },
    '544': {
        '이름': 'BK21 CEICT 융합연구지원실'
    },
    '545': {
        '이름': '무선통신회로 연구실'
    },
    '546': {
        '이름': '웨어러블 융합전자연구소8'
    },
    '547-1': {
        '이름': '산학협력 중점 교수연구실'
    },
    '547-2': {
        '이름': '통신 연구실'
    },
    '548': {
        '이름': '웨어러블 융합전자연구소7'
    },
    '549': {
        '이름': '이동통신 연구실'
    },
    '551': {
        '이름': '멀티서비스네트워킹 연구실'
    },
    '552': {
        '이름': 'HRI 연구실'
    },
    '553': {
        '이름': '웨어러블 융합전자연구소6'
    },
    '553-1': {
        '이름': 'AIMS 연구실'
    },
    '554': {
        '이름': '아마추어무선국'
    },
    '554-1': {
        '이름': 'HRI 연구실2'
    },
    '555-1': {
        '이름': '컴퓨터비전 연구실'
    },
    '555-2': {
        '이름': '웨어러블 융합전자연구소4'
    },
    '559': {
        '이름': '통신 및 부호이론 연구실'
    },
    '563': {
        '이름': '웨어러블 융합전자연구소 전임연구인력 연구실'
    },
    '563-1': {
        '이름': '기도실'
    },
    '565-1': {
        '이름': '웨어러블 융합전자연구소1'
    },
    '565-2': {
        '이름': '웨어러블 융합전자연구소2'
    },
    '565-3': {
        '이름': '웨어러블 융합전자연구소3'
    },
    '566': {
        '이름': '영상통신 연구실'
    },
    '567': {
        '이름': '미디어랩3'
    },
    '568': {
        '이름': '대학원생 공동연구실'
    },
    '569': {
        '이름': 'IPTV 연구센터'
    },
    '570': {
        '이름': '미디어랩1'
    },
    '601-1': {
        '이름': '우주공간물리 연구실'
    },
    '601-2': {
        '이름': '근지구우주환경 연구실'
    },
    '601-3': {
        '이름': '김관혁 교수연구실'
    },
    '601-4': {
        '이름': '진호 교수연구실'
    },
    '602-1': {
        '이름': '천체물리 연구실1'
    },
    '602-2': {
        '이름': '천체물리 연구실2'
    },
    '603': {
        '이름': '적외선 연구실'
    },
    '604-1': {
        '이름': '의공학 연구실'
    },
    '604-2': {
        '이름': '영상시스템 연구실2'
    },
    '605': {
        '이름': '영상시스템 연구실1'
    },
    '606': {
        '이름': '집적회로 인터페이스 연구실'
    },
    '607': {
        '이름': '이수열 교수연구실'
    },
    '608': {
        '이름': '윤상웅 교수연구실'
    },
    '609': {
        '이름': '김동한 교수연구실'
    },
    '611': {
        '이름': '이범선 교수연구실'
    },
    '613': {
        '이름': '김창우 교수연구실'
    },
    '615': {
        '이름': '송주빈 교수연구실'
    },
    '617': {
        '이름': '이종욱 교수연구실'
    },
    '701': {
        '이름': '조민형 교수연구실'
    },
    '703': {
        '이름': '이진석 교수연구실'
    },
    '705': {
        '이름': '박경모 교수연구실'
    },
    '707': {
        '이름': '한승무 교수연구실'
    },
    '708': {
        '이름': '의료용 초음파 연구실'
    },
    '709': {
        '이름': '변경민 교수연구실'
    },
    '710': {
        '이름': '생체광학 연구실'
    },
    '711': {
        '이름': '이상민 교수연구실'
    },
    '712': {
        '이름': '통합의학 뇌영상 연구실'
    },
    '713': {
        '이름': '나노마이크로 생체전자 연구실'
    },
    '714': {
        '이름': '의료 인공지능 연구실'
    },
    '715': {
        '이름': '박기주 교수연구실'
    },
    '716': {
        '이름': '바이오메디컬 초음파공학 연구실'
    },
    '717': {
        '이름': '김태성 교수연구실'
    },
    '719': {
        '이름': '바이오영상 연구실 / 뇌공학 연구실'
    }
};

var enterButton1 = document.getElementById('enterButton1');
var enterButton2 = document.getElementById('enterButton2');
var mainContainer = document.getElementById('main');
var roomInput = document.getElementById('roomInput');
var roomstate = document.getElementById('roomstate');
var scheduleDisplay = document.getElementById('scheduleDisplay');
var locationInfoDisplay = document.getElementById('locationInfo');

enterButton1.addEventListener('click', function () {
    // 창이 전환되면서 검색창이 나타나도록 스타일을 변경
    mainContainer.style.display = 'none';
    roomInput.style.display = 'inline-block';
    locationInfoDisplay.style.display = 'none';
    currentState = 'roomInput';
    scheduleDisplay.style.dispaly = 'none';

    // 뒤로가기 버튼을 표시하고 이벤트 리스너 추가
    var backButton = document.getElementById('backButton');
    backButton.style.display = 'inline-block';
    backButton.addEventListener('click', goBack);
});

//enterButton1
function searchRoom() {
    var roomNumber = document.getElementById('roomNumber').value;
    // 입력한 강의실 번호에 대한 시간표 표시
    displaySchedule(roomNumber);
}

function displaySchedule(roomNumber) {
    var schedule = class_schedule[roomNumber];

    if (schedule) {
        var scheduleHTML = '<h2>' + roomNumber + '호' + ' 강의 시간표' + '     Classroom</h2>';
        scheduleHTML += '<ul>';

        for (var day in schedule) {
            if (schedule[day].length > 0) {
                scheduleHTML += '<li><strong>' + day + ':</strong> ' + schedule[day].join(', ') + '</li>';
            }
        }

        scheduleHTML += '</ul>';
        scheduleDisplay.innerHTML = scheduleHTML;

        // 추가된 부분: locationInfoDisplay를 숨기고 scheduleDisplay를 표시
        locationInfoDisplay.style.display = 'none';
        scheduleDisplay.style.display = 'block';
    } else {
        // 강의실 정보가 없을 경우 장소 정보를 표시
        displayLocationInfo(roomNumber);
    }
}

function displayLocationInfo(locationId) {
    var locationInfo = nonClassroom[locationId];

    if (locationInfo) {
        locationTitle.innerHTML = locationId + '호' + '     NonClassroom';
        locationContent.innerHTML = '<p><strong>이름:</strong> ' + locationInfo['이름'] + '</p>';

        // 추가된 부분: locationInfoDisplay를 표시하고 scheduleDisplay를 숨김
        locationInfoDisplay.style.display = 'block';
        scheduleDisplay.style.display = 'none';
    } else {
        alert('해당 장소는 존재하지 않습니다.');
    }
}

//enterButton2
enterButton2.addEventListener('click', function () {
    // '현재 강의실 수업 현황 보기' 버튼을 클릭했을 때의 동작
    mainContainer.style.display = 'none';
    roomInput.style.display = 'none';
    locationInfoDisplay.style.display = 'none';
    roomstate.style.display = 'inline-block';
    currentState = 'roomstate';
    showCurrentSchedule();

    setTimeout(() => {
        alert('※강의실 사용 주의사항※\nㆍ강의실 깨끗하게 사용\nㆍ타인에게 민폐끼치는 행동 금지\nㆍ타인 배려하기')
    }, 50);
    // 뒤로가기 버튼을 표시하고 이벤트 리스너 추가
    var backButton = document.getElementById('backButton');
    backButton.style.display = 'inline-block';
    backButton.addEventListener('click', goBack);
});

function showCurrentSchedule() {
    document.getElementById('floorImage').style.display = 'none';
    var scheduleHTML = '<h2>전체 강의실 현재 강의 여부</h2>';
    scheduleHTML += '<ul>';

    // 현재 시간과 요일 가져오기
    var currentTime = getCurrentTime();
    var currentDay = getDayOfWeek();

    // 모든 강의실에 대해 반복
    for (var roomNumber in class_schedule) {
        var currentSchedule = class_schedule[roomNumber][currentDay];

        // 현재 강의 중인지 확인
        var isCurrentlyInClass = isCurrentTimeInSchedule(currentTime, currentSchedule);
        if (isCurrentTimeInSchedule) {
            var index = whatIndex(currentTime, currentSchedule);
        }
        var classStatusClass = isCurrentlyInClass ? 'class-in-session' : 'class-not-in-session';
        scheduleHTML += '<li class="' + classStatusClass + '">' + roomNumber + '호: ';

        if (isCurrentlyInClass) {
            // 강의 중일 경우: 수업이 몇 분 후에 종료됩니다
            var remainingTime = getRemainingTime(currentTime, currentSchedule, index);
            scheduleHTML += remainingTime + ' 후  강의 종료';
        } 
        else {
            // 강의 중이 아닌 경우: 다음 수업 정보 확인
            var nextSchedule = getNextSchedule(currentTime, currentSchedule);

            if (!nextSchedule) {
                // 오늘 다음 수업이 없을 경우
                if(currentSchedule.length > 0) {
                    scheduleHTML += '오늘 수업 끝남';
                }
                else {
                    scheduleHTML += '오늘 수업 없음';
                }
            } 
            else {
                // 다음 수업이 있을 경우: 다음 수업이 몇 분 남았습니다
                var timeUntilNextClass = getTimeUntilNextClass(currentTime, nextSchedule);
                scheduleHTML += timeUntilNextClass + ' 후 수업 시작';
            }
        }

        scheduleHTML += '</li>';
    }
    scheduleHTML += '</ul>';

    // 스케줄을 표시할 요소에 HTML을 설정
    scheduleDisplay.innerHTML = scheduleHTML;

    // 추가된 부분: locationInfoDisplay를 숨기고 scheduleDisplay를 표시
    locationInfoDisplay.style.display = 'none';
    scheduleDisplay.style.display = 'block';

    // 현재 상태를 'scheduleDisplay'로 변경
    currentState = 'scheduleDisplay';
}

// 현재 시간이 강의 일정에 포함되는지 확인하는 함수
function isCurrentTimeInSchedule(currentTime, schedule) {
    for (var i = 0; i < schedule.length; i++) {
        var timeRange = schedule[i].split(' ~ ');
        var startTime = timeRange[0];
        var endTime = timeRange[1];

        if (currentTime >= startTime && currentTime <= endTime) {
            return true;
        }
    }
    return false;
}

function getDayOfWeek() {
    var daysOfWeek = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
    var today = new Date();
    var dayIndex = today.getDay();
    return daysOfWeek[dayIndex];
}

function getCurrentTime() {
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();

    var formattedHours = hours < 10 ? '0' + hours : hours;
    var formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

    return formattedHours + ':' + formattedMinutes;
}

//추가된 함수들

function getRemainingTime(currentTime, currentSchedule, index) {
    var endTime = currentSchedule[index].split(' ~ ')[1];
    var remainingTime = getTimeDifference(currentTime, endTime);
    return remainingTime;
}

// 추가된 함수: 다음 수업 정보 가져오기
function getNextSchedule(currentTime, schedule) {
    for (var i = 0; i < schedule.length; i++) {
        var classTime = schedule[i].split(' ~ ');
        var startTime = classTime[0];
        if (currentTime < startTime) {
            return classTime;
        }
    }
    return null;
}

// 추가된 함수: 다음 수업까지 남은 시간 계산
function getTimeUntilNextClass(currentTime, nextClassStartTime) {
    var remainingTime = getTimeDifference(currentTime, nextClassStartTime[0]);
    return remainingTime;
}

// 추가된 함수: 두 시간 사이의 차이 계산
function getTimeDifference(startTime, endTime) {
    var start = new Date("2000-01-01 " + startTime);
    var end = new Date("2000-01-01 " + endTime);
    var difference = end - start;

    var hours = Math.floor((difference / 1000) / 3600);
    var minutes = Math.floor(((difference / 1000) % 3600) / 60);

    var timeString = '';
    if (hours > 0) {
        timeString += hours + '시간 ';
    }
    if (minutes > 0) {
        timeString += minutes + '분';
    }

    return timeString.trim() || '0분';
}

// 현재 시간이 강의 일정에 포함되는지 확인하는 함수
function isCurrentTimeInSchedule(currentTime, schedule) {
    for (var i = 0; i < schedule.length; i++) {
        var timeRange = schedule[i].split(' ~ ');
        var startTime = timeRange[0];
        var endTime = timeRange[1];

        if (currentTime >= startTime && currentTime <= endTime) {
            return true;
        }
    }
    return false;
}

function getDayOfWeek() {
    var daysOfWeek = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
    var today = new Date();
    var dayIndex = today.getDay();
    return daysOfWeek[dayIndex];
}

function getCurrentTime() {
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();

    var formattedHours = hours < 10 ? '0' + hours : hours;
    var formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

    return formattedHours + ':' + formattedMinutes;
}

// 브라우저 호환(크로스브라우징)을 체크한후 페이지 로딩후 selectEvent() 함수를 실행
if (window.addEventListener) {
    window.addEventListener("load", selectEvent, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", selectEvent);
} else {
    window.onload = selectEvent;
}
function selectEvent() {
    // 폼이름,셀렉트박스이름 으로 셀렉트박스에 접근
    // onchange 이벤트를 적용
    document.selectForm.floor.onchange = selectFun;
}
// this.value 로 이벤트가 발생한 곳,자신(this)의 value값을 출력
function selectFun() {
    if (this.value == 'all') {
        showCurrentSchedule();
    }
    else {
        changeFloor();
        showCurrentScheduleFloor(this.value);
    }
}

function refresh() {
    var floorElement = document.querySelector('select[name="floor"]');
    var floorValue = floorElement.value;

    if (floorValue == 'all') {
        showCurrentSchedule();
    }
    else {
        changeFloor();
        showCurrentScheduleFloor(floorValue);
    }
}

function changeFloor() {
    var selectElement = document.querySelector('select[name="floor"]');
    var selectedFloor = selectElement.value;

    if (selectedFloor != 'all') {
        var floorImageElement = document.getElementById('floorImage');
        var imageUrl = '';

        switch (selectedFloor) {
            case '5':
                imageUrl = '5F_final.png';
                break;
            case '4':
                imageUrl = '4F_final.png';
                break;
            case '2':
                imageUrl = '2F_final.png';
                break;
            case '1':
                imageUrl = '1F_final.png';
                break;
            case 'B':
                imageUrl = 'BF_final.png';
                break;
        }

        // 이미지 엘리먼트에 배경 이미지 설정
        floorImageElement.style.backgroundImage = 'url(' + imageUrl + ')';
        floorImageElement.style.display = 'inline';
    }
}

function showCurrentScheduleFloor(value) {
    if (value == 'B') {
        var scheduleHTML = '<h2>' + value + '1층 강의실 현재 강의 여부</h2>';
    }
    else {
        var scheduleHTML = '<h2>' + value + '층 강의실 현재 강의 여부</h2>';
    }
    scheduleHTML += '<ul>';

    // 현재 시간과 요일 가져오기
    var currentTime = getCurrentTime();
    var currentDay = getDayOfWeek();

    // 모든 강의실에 대해 반복
    for (var roomNumber in class_schedule) {
        if (roomNumber[0] == value) {
            var currentSchedule = class_schedule[roomNumber][currentDay];

            // 현재 강의 중인지 확인
            var isCurrentlyInClass = isCurrentTimeInSchedule(currentTime, currentSchedule);4
            if (isCurrentTimeInSchedule) {
                var index = whatIndex(currentTime, currentSchedule);
            }

            var classStatusClass = isCurrentlyInClass ? 'class-in-session' : 'class-not-in-session';
            scheduleHTML += '<li class="' + classStatusClass + '">' + roomNumber + '호: ';

            if (isCurrentlyInClass) {
                // 강의 중일 경우: 수업이 몇 분 후에 종료됩니다
                var remainingTime = getRemainingTime(currentTime, currentSchedule, index);
                scheduleHTML += remainingTime + ' 후  강의 종료';
            } else {
                // 강의 중이 아닌 경우: 다음 수업 정보 확인
                var nextSchedule = getNextSchedule(currentTime, currentSchedule);

                if (!nextSchedule) {
                    // 오늘 다음 수업이 없을 경우
                    if(currentSchedule.length > 0) {
                        scheduleHTML += '오늘 수업 끝남';
                    }
                    else {
                        scheduleHTML += '오늘 수업 없음';
                    }
                } else {
                    // 다음 수업이 있을 경우: 다음 수업이 몇 분 남았습니다
                    var timeUntilNextClass = getTimeUntilNextClass(currentTime, nextSchedule);
                    scheduleHTML += timeUntilNextClass + ' 후 수업 시작';
                }
            }
        }
        else { continue; }
    }
    scheduleHTML += '</ul>';
    scheduleDisplay.innerHTML = scheduleHTML;

    // 추가된 부분: locationInfoDisplay를 숨기고 scheduleDisplay를 표시
    locationInfoDisplay.style.display = 'none';
    scheduleDisplay.style.display = 'block';

    // 현재 상태를 'scheduleDisplay'로 변경
    currentState = 'scheduleDisplay';
}

// 추가된 함수: 인덱스 반환
function whatIndex(currentTime, schedule) {
    for (var i = 0; i < schedule.length; i++) {
        var timeRange = schedule[i].split(' ~ ');
        var startTime = timeRange[0];
        var endTime = timeRange[1];

        if (currentTime >= startTime && currentTime <= endTime) {
            return i;
        }
    }
}