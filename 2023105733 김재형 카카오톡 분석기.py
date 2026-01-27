#### 아래 변수에다가, string의 형태로 파일 이름을 적어주세요. 
filename = 'test3.txt'
##### 해당 부분은 파일을 열어 데이터가 읽어와지는 부분입니다. 건드리지 말아주세요. 
kt_file = open(filename, 'r',encoding='utf8')
kt_file_content = kt_file.readlines()
kt_file.close()
##### 아래에 코드를 작성해주시면 됩니다. 카카오톡 대화 파일의 내용은 kt_file_content 변수에 저장되어 있습니다

message = dict() #대화내용 저장할 빈 딕셔너리
kt_file_content = kt_file_content[4:] # 위에 3줄 없애기

name=""

for line in kt_file_content:                         #불필요한 요소 제거
    if line.endswith('요일 ---------------\n') or \
       line.endswith('을 초대하였습니다.\n') or \
       '님이 나갔습니다.' in line or \
       '님을 초대하였습니다.' in line:
        continue

    if '['in line:                 # 줄에 [ 가 있으면
        line = line.strip('\n').split('] ')   #strip('\n')-> 문자열 끝의 개행문자 제거 # ] 를 구분자로 사용하여 문자열을 나눈다.
        name = line[0][1:]
        data = "] ".join(line[2:])          # ] 를 기준으로 split하여 리스트로 만들고 그 리스트의 2번째 인덱스부터 끝까지 요소를 다시 문자열로 join
        if name in message:                     
            message[name].append(data)        
        else:                          
            message[name]=[data]              
    else:
        message[name][-1] += line.strip('\n') # 대화내용이 name의 마지막 메시지 리스트에 추가
  
laugh_words = ['ㅋㅋ', 'ㅎㅎ']
swear_words = ['ㅅㅂ', '고소']
cry_words = ['ㅜㅜ' , 'ㅠㅠ']

while True:                             
    user_input = input('검색할 단어: ')      

    if user_input == '\swear':               
        for i in message:                
            swear_count = 0             
            for l in swear_words:        
                for text in message[i]:  
                    if l in text:       
                        swear_count += 1 
            print(i, swear_count,'회')        

    elif user_input == '\laugh':
        for i in message:
            laugh_count = 0
            for l in laugh_words:
                for text in message[i]:
                    if l in text:
                        laugh_count += 1
            print(i, laugh_count,'회')
            
    elif user_input == '\cry':
        for i in message:
            cry_count = 0
            for l in cry_words:
                for text in message[i]:
                    if l in text:
                        cry_count += 1
            print(i, cry_count,'회')

    elif user_input == '\\talk':            
        for i in message:              
            talk_count = 0
            for l in message[i]:
                talk_count += 1
            print(i, talk_count,'회')

    elif user_input == '\stop':            
        print('종료합니다')
        break

    else:                             
        for i in message:
            word_count = 0
            for l in message[i]:
                if user_input in l:
                    word_count += 1
            print(i, word_count,'회')