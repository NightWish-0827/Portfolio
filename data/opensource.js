/*
 * data/opensource.js — 📦 Open Source Lab 수정은 여기서
 *
 * category: 'editor' | 'utils' | 'graphics'
 * url      : GitHub 레포 URL
 * wikiUrl  : GitHub Wiki URL (null이면 버튼 미노출)
 */

const openSourceData = [
  {
    id: 'uninject',
    category: 'utils',
    title: 'UNInject',
    version: 'v2.1.0',
    desc: 'Roslyn 코드 생성 기반 Unity DI 프레임워크. IL2CPP 완전 지원 · 3단계 스코프(Global/Scene/Local) · 에디터 시점 베이크 아키텍처. Zenject 대비 Cold Start 81.9× 빠름.',
    tags: ['Unity', 'C#', 'Roslyn', 'DI', 'IL2CPP', 'UPM'],
    url: 'https://github.com/NightWish-0827/UNInject',
    wikiUrl: 'https://nightwish-0827.github.io/UNInject/',
  },
  {
    id: 'r3s',
    category: 'utils',
    title: 'R3S',
    version: 'v1.0.0',
    desc: 'Roslyn Source Generator로 R3 구독 보일러플레이트를 선언적 어트리뷰트로 대체. [AutoSubscribe] · [ReactiveProperty] · [AutoDispose] 로 배선 코드 자동 생성.',
    tags: ['Unity', 'C#', 'R3', 'Roslyn', 'Reactive', 'UPM'],
    url: 'https://github.com/NightWish-0827/R3S',
    wikiUrl: 'https://nightwish-0827.github.io/R3S/',
  },
  {
    id: 'powerpool',
    category: 'utils',
    title: 'PowerPool',
    version: 'beta',
    desc: 'ref struct 기반 Zero Allocation Unity 오브젝트 풀. O(1) 반환 · Anti-Zombie 버전 검증 · GC 스파이크 없는 Fluent Spawn Builder. 힙 할당 없는 스폰 설정.',
    tags: ['Unity', 'C#', 'ref struct', 'Zero Allocation', 'O(1)', 'UPM'],
    url: 'https://github.com/NightWish-0827/PowerPool',
    wikiUrl: null,
  },
  {
    id: 'unfinder',
    category: 'editor',
    title: 'UNFinder',
    version: 'v2.0.1',
    desc: 'Unity의 GameObject.Find를 인덱스 기반으로 대체하는 고성능 조회 SDK. FNV-1a 해싱 · 버킷 기반 O(1) 이름 조회 · 풀링 쿼리 파이프라인으로 씬 전체 스캔 제거.',
    tags: ['Unity', 'C#', 'FNV-1a', 'O(1)', 'Query Pipeline', 'UPM'],
    url: 'https://github.com/NightWish-0827/UNFinder',
    wikiUrl: null,
  },
];
