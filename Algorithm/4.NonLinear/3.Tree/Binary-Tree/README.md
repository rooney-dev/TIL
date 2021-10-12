# 이진 트리

## 1. 개요

- 각각의 노드가 **최대 두개의 자식 노드**를 가지는 트리 자료 구조
- 활용 방식
    - 검색과 정렬 : 이진 탐색 트리와 이진 힙 구현에 활용
    - 허프만 코딩 : 연관 분기 구조 위한 데이터 표현에 활용
- 이진 트리의 종류
    - 포화 이진 트리 : 모든 레벨의 노드가 가득 채워져 있는 트리 (2^n -1 개의 노드)
    - 완전 이진 트리 :  마지막 레벨 전까지 노드가 가득 채워져 있고, 마지막 레벨은 오니족부터 순차적으로 채워져 있는 트리
    - 정 이진 트리 : 모든 노드가 0개 또는 2개의 자식 노드만 갖는 트리
    - 편향 이진 트리 : 왼쪽 혹은 오른쪽으로 편향되게 치우쳐 있는 트리
    - 균형 이진 트리 : 삽입 / 삭제가 이우러 질 때 , 왼쪽 서브 트리와 오른쪽 서브 트리의 높이차를 1이하로 맞추는 이진 탐색 트리