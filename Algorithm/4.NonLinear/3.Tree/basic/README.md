# Tree

# 트리

## 1. 개요

- 그래프의 일종으로 두 노드 사이의 하나의 간선만 연결되어 있는, 최소 연결과 계층 형태의 비선형 자료 구조
- 트리의 구조 및 용어
    
    ![2.png](Tree%2012f88116f48a4b619705365c2dd1d9f4/2.png)
    
    ![1.png](Tree%2012f88116f48a4b619705365c2dd1d9f4/1.png)
    
- 최소 연결 트리로 불림
- 계층모델, 방햔 비순환 그래프의 한 종류

## 2. 트리 순회

- 트리 구조에서 각각의 노드를 정확히 한 번씩 체계적인 방법으로 방문하는 과정
- 필요 용어
    - N(Node) : 해당 노드를 방문
    - L(Left): 왼쪽 서브 트리로 이동
    - R(Right): 오른쪽 서브 트리로 이동
- 순회 방식
    - 전위 순회 (Pre-order) : N - L - R
    - 중위 순회 (In-order) : L - N - R
    - 후위 순회 (Post-order) : L - R - N
    - 층별 순회 ( Level-order) : 낮은 Level 부터 순차적으로 순회