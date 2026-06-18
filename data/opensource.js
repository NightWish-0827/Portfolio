/*
 * data/opensource.js — 📦 Open Source Lab 수정은 여기서
 *
 * badges  : 'stable' | 'beta' | 'active' | 'wiki'
 *           active  → 카드 glow 이펙트 + "최근 업데이트" 뱃지
 *           stable  → 초록 "Stable" 뱃지
 *           beta    → 앰버 "Beta" 뱃지
 *           wiki    → 청록 "공식 위키" 뱃지
 * docsUrl : 한국어 문서(블로그 포스트) URL
 * wikiUrl : GitHub Wiki URL (null이면 버튼 미노출)
 */

const openSourceData = [
  {
    id: 'uninject',
    category: 'utils',
    title: 'UNInject',
    version: 'v2.1.0',
    badges: ['hot', 'stable', 'wiki'],
    desc: 'Roslyn 코드 생성 기반 Unity DI 프레임워크. <br> IL2CPP 완전 지원 · 3단계 스코프 · 에디터 시점 베이크 아키텍처. <br> 무비용 의존성 주입. Pure C# 서비스 레이어 Tick 지원. 의존성 그래프 툴링.',
    tags: ['Unity', 'C#', 'Roslyn', 'DI', 'IL2CPP', 'UPM'],
    url: 'https://github.com/NightWish-0827/UNInject',
    wikiUrl: 'https://nightwish-0827.github.io/UNInject/',
    docsUrl: 'https://nightwish-0827.github.io/sdks/uninject/',
  },
  {
    id: 'r3s',
    category: 'utils',
    title: 'R3S',
    version: 'v1.0.0',
    badges: ['stable', 'wiki'],
    desc: 'Roslyn Source Generator로 R3 보일러플레이트를 선언적 어트리뷰트로 대체. <br> [AutoSubscribe] [ReactiveProperty] [AutoDispose] 로 배선 코드 자동 생성. <br> 잉여 라인 감소 및 효율 확대.',
    tags: ['Unity', 'C#', 'R3', 'Roslyn', 'Reactive', 'UPM'],
    url: 'https://github.com/NightWish-0827/R3S',
    wikiUrl: 'https://nightwish-0827.github.io/R3S/',
    docsUrl: 'https://nightwish-0827.github.io/sdks/r3s/',
  },
  {
    id: 'powerpool',
    category:'editor',
    title: 'PowerPool',
    version: '1.0.0',
    badges: ['beta'],
    desc: 'ref struct 기반 Zero Allocation Unity 오브젝트 풀. <br> O(1) 반환 · Anti-Zombie 버전 검증 · GC 스파이크 없는 Fluent Spawn Builder. 힙 할당 없는 스폰 설정.',
    tags: ['Unity', 'C#', 'ref struct', 'Zero Allocation', 'O(1)', 'UPM'],
    url: 'https://github.com/NightWish-0827/PowerPool',
    wikiUrl: null,
    docsUrl: 'https://nightwish-0827.github.io/sdks/powerpool/',
  },
  {
    id: 'unfinder',
    category: 'utils',
    title: 'UNFinder',
    version: 'v2.0.1',
    badges: ['beta'],
    desc: 'Unity의 GameObject.Find를 인덱스 기반으로 대체하는 고성능 조회 SDK. <br> FNV-1a 해싱 · 버킷 기반 O(1) 이름 조회 · 풀링 쿼리 파이프라인으로 씬 색인. <br> "부담없이 Find를 쓰고 싶은 괴짜들만!" ',
    tags: ['Unity', 'C#', 'FNV-1a', 'O(1)', 'Query Pipeline', 'UPM'],
    url: 'https://github.com/NightWish-0827/UNFinder',
    wikiUrl: null,
    docsUrl: 'https://nightwish-0827.github.io/sdks/unfinder/',
  },
];
