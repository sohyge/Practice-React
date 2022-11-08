export type trafficInfo = {
  stime: string; //날짜
  sdate: string; //시간
  cjunkook: string; //전국교통량
  cjibangDir: string; //지방방향 교통량
  cseoulDir: string; //서울방향 교통량
  csudj: string; //서울 -> 대전 소요시간
  csudg: string; //서울 -> 대구 소요시간
  csuus: string; //서울 -> 울산 소요시간
  csubs: string; //서울 -> 부산 소요시간
  csugj: string; //서울 -> 광주 소요시간
  csump: string; //서울 -> 목포 소요시간
  csukr: string; //서울 -> 강릉 소요시간
  cdjsu: string; //대전 -> 서울 소요시간
  cdgsu: string; //대구 -> 서울 소요시간
  cussu: string; //울산 -> 서울 소요시간
  cbssu: string; //부산 -> 서울 소요시간
  cgjsu: string; //광주 -> 서울 소요시간
  cmpsu: string; //목포 -> 서울 소요시간
  ckrsu: string; //강릉 -> 서울 소요시간
  csuyy: string; //남양주 -> 양양 소요시간
  cyysu: string; //양양 -> 남양주 소요시간
  csudg_bus: string; //서울 -> 대전 버스 소요시간
  csuus_bus: string; //서울 -> 대구 버스 소요시간
  csudj_bus: string; //서울 -> 울산 버스 소요시간
  csubs_bus: string; //서울 -> 부산 버스 소요시간
  csugj_bus: string; //서울 -> 광주 버스 소요시간
  csump_bus: string; //서울 -> 목포 버스 소요시간
  csukr_bus: string; //서울 -> 강릉 버스 소요시간
  csuyy_bus: string; //대전 -> 서울 버스 소요시간
  cdjsu_bus: string; //대구 -> 서울 버스 소요시간
  cdgsu_bus: string; //울산 -> 서울 버스 소요시간
  cussu_bus: string; //부산 -> 서울 버스 소요시간
  cbssu_bus: string; //광주 -> 서울 버스 소요시간
  cgjsu_bus: string; //목포 -> 서울 버스 소요시간
  cmpsu_bus: string; //강릉 -> 서울 버스 소요시간
  ckrsu_bus: string; //남양주 -> 양양 버스 소요시간
  cyysu_bus: string; //양양 -> 남양주 버스 소요시간
};

export type trafficRealInfo = {
  exDivName: string; //도공/민자 구분명
  tmName: string; //자료구분명
  tcsName: string; //TCS/hi-pass구분명
  trafficAmout: string; //교통량
  sumTm: string; //집계시간
  carType: string; //차종구분코드(1:1종,2:2종,3:3종,4:4종,5:5종,6:6종,7:7종,8:8종)
  exDivCode: string; //도공/민자 구분코드(도공:00/이외 민자)
  tcsType: string; //TCS/hi-pass 구분(1:TCS,2:hi-pass)
  tmType: string; //자료구분(1:1시간, 2:15분, 3:5분)
  code: string; //결과
  message: string; //결과 메시지
  count: string; //전체 결과 수
};
