#### 아래 변수에다가, string의 형태로 파일 이름을 적어주세요.
filename = 'test3.txt'

##### 해당 부분은 파일을 열어 데이터가 읽어와지는 부분입니다. 건드리지 말아주세요.
kt_file = open(filename, 'r', encoding='utf8')
kt_file_content = kt_file.readlines()
kt_file.close()

##### 아래에 코드를 작성해주시면 됩니다.
##### 카카오톡 대화 파일의 내용은 kt_file_content 변수에 저장되어 있습니다

message = dict()  # 대화내용 저장할 빈 딕셔너리 생성 key: 이름, value: 내용(리스트)
kt_file_content = kt_file_content[4:]  # 위에 3줄(헤더) 제거

name = ""  # name를 빈 문자열로 초기화, 현재 대화 참여자 이름 저장용 변수

for line in kt_file_content:
    # 날짜 구분선, 초대/퇴장 안내 메시지 등 불필요한 줄 제거
    if line.endswith('요일 ---------------\n') or \
       line.endswith('을 초대하였습니다.\n') or \
       '님이 나갔습니다.' in line or \
       '님을 초대하였습니다.' in line:
        continue

    # 대화 시작 줄은 항상 [이름] 으로 시작함
    if line.startswith('['):
        # 줄 끝 개행 문자 제거 후 '] '를 기준으로 분리
        # 예: [이름] [오전 10:12] 메시지
        line = line.strip('\n').split('] ')

        name = line[0][1:]              # [이름] 에서 이름만 추출
        data = "] ".join(line[2:])      # 실제 대화 내용만 추출

        if name in message:
            message[name].append(data)  # 이미 존재하는 이름이면 메시지 추가
        else:
            message[name] = [data]      # 처음 등장한 이름이면 리스트 생성

    else:
        # 줄바꿈으로 인해 이어지는 메시지는 이전 메시지에 이어붙임
        # name이 존재할 때만 처리하여 오류 방지
        if name:
            message[name][-1] += line.strip('\n')

# 감정 및 특정 단어 목록
laugh_words = ['ㅋㅋ', 'ㅎㅎ']     # 웃음 표현
swear_words = ['ㅅㅂ', '고소']    # 욕설 표현
cry_words = ['ㅜㅜ', 'ㅠㅠ']      # 울음 표현

while True:
    user_input = input('단어를 검색해주세요: ')

    # 욕설 단어 횟수 출력
    if user_input == '\\swear':
        for i in message:
            swear_count = 0
            for swear in swear_words:
                for text in message[i]:
                    if swear in text:
                        swear_count += 1
            print(i, swear_count, '회')

    # 웃음 단어 횟수 출력
    elif user_input == '\\laugh':
        for i in message:
            laugh_count = 0
            for laugh in laugh_words:
                for text in message[i]:
                    if laugh in text:
                        laugh_count += 1
            print(i, laugh_count, '회')

    # 울음 단어 횟수 출력
    elif user_input == '\\cry':
        for i in message:
            cry_count = 0
            for cry in cry_words:
                for text in message[i]:
                    if cry in text:
                        cry_count += 1
            print(i, cry_count, '회')

    # 사용자별 총 발화 횟수 출력
    elif user_input == '\\talk':
        for i in message:
            talk_count = 0
            for talk in message[i]:
                talk_count += 1
            print(i, talk_count, '회')

    # 프로그램 종료
    elif user_input == '\\stop':
        print('종료합니다')
        break

    # 특정 단어 검색
    else:
        for i in message:
            word_count = 0
            for word in message[i]:
                if user_input in word:
                    word_count += 1
            print(i, word_count, '회')
