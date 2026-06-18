/*
 * data/talab.js — 🎨 TA Lab 작업물 수정은 여기서
 *
 * category: 'shaders' | 'vfx' | 'tools'
 * thumb   : 썸네일 이미지 경로 (없으면 null, 예: 'assets/ta_toon.jpg')
 * videoUrl: YouTube embed URL (없으면 null)
 */

const taLabData = [
  {
    id      : 'shader-toon',
    category: 'shaders',
    title   : '스타일라이즈드 툰 렌더링',
    catLabel: 'Shaders & Rendering',
    desc    : '1D Ramp Texture 조명 매핑과 스타일라이즈드 림라이팅으로 구현한 카툰 렌더링 셰이더.',
    thumb   : null,
    videoUrl: null,
    overview: '1D Ramp Texture 조명 매핑과 스타일라이즈드 림라이팅으로 포근한 파스텔풍 3D 카툰 비주얼을 저사양 모바일 기기에서도 최적으로 표현하는 셰이더입니다.',
    details : [
      '1D Ramp Texture 조명 매핑으로 부드럽고 따뜻한 툰 경계 음영 연출',
      '스타일라이즈드 림라이팅으로 어두운 씬에서도 캐릭터 실루엣 강조',
      'URP 포워드 패스 오버드로우 최소화로 모바일 성능 방어',
    ],
  },
  {
    id      : 'shader-dissolve',
    category: 'shaders',
    title   : '디렉셔널 디졸브 셰이더',
    catLabel: 'Shaders & Rendering',
    desc    : '특정 월드 방향 벡터를 기준으로 메시가 타들어가며 소멸하는 HDR 경계 발광 디졸브 셰이더.',
    thumb   : null,
    videoUrl: null,
    overview: '메시 로컬 회전에 관계없이 특정 월드 방향 벡터를 기준으로 타들어가며 소멸하는 디졸브 셰이더입니다.',
    details : [
      'World Space Projection 클리핑으로 모든 각도 메시에서 방향성 소멸 연출',
      'HDR 경계 발광 아웃라인 — 마그마가 타오르는 극도의 비주얼 연출',
      '디졸브 높이 경계를 역산해 게임 콜라이더와 실시간 동기화',
    ],
  },
  {
    id      : 'vfx-soul',
    category: 'vfx',
    title   : '영혼 흡수 VFX',
    catLabel: 'VFX & Animation',
    desc    : '몬스터 처치 시 발끝부터 타들어가는 디졸브와 3차 베지에 곡선 경로로 날아오는 영혼 수확 VFX.',
    thumb   : null,
    videoUrl: null,
    overview: '몬스터 처치 타격감을 극대화하기 위해 디졸브 이펙트와 베지에 곡선 파티클 유도를 결합한 영혼 수확 VFX 연출입니다.',
    details : [
      '버텍스 축 높이 데이터 파싱 — 소멸 경계에 HDR Emission 발광 처리',
      '플레이어 실시간 이동 추적 3차 베지에 스플라인 경로 파티클 유도',
      'C# 타이밍 동기화로 디졸브·파티클·획득 UI 트리거를 프레임 오차 없이 연동',
    ],
  },
  {
    id      : 'shader-outline',
    category: 'shaders',
    title   : '원근 대응 아웃라인 셰이더',
    catLabel: 'Shaders & Rendering',
    desc    : '원근 거리와 카메라 각도에 관계없이 안정적 두께를 유지하는 Vertex Normal Expansion 기반 아웃라인 셰이더.',
    thumb   : null,
    videoUrl: null,
    overview: '3D 공간에서 객체의 실루엣을 부드럽게 잡아주는 범용 실시간 아웃라인 셰이더입니다.',
    details : [
      'Vertex Normal Expansion 기반 고성능 2-Pass 아웃라인 구조',
      '원근 거리 비례 두께 보정 공식 — 멀어져도 엣지가 뭉개지지 않음',
      'Vertex Color Normal 파싱으로 Hard Edge 크래싱 방지',
    ],
  },
  {
    id      : 'tools-ik',
    category: 'tools',
    title   : '동적 IK 리깅 시스템',
    catLabel: 'Tools & Animation',
    desc    : '보스 팔 움직임에 맞춰 전선이 실시간으로 꼬임과 장력을 표현하는 Animation Rigging 기반 동적 멀티 본 IK 리깅 시스템.',
    thumb   : null,
    videoUrl: null,
    overview: '3D 로봇 보스 팔에 걸쳐진 전선이 자연스럽고 물리적 텐션을 가지며 실시간 꼬임과 장력을 극복하도록 설계한 하이브리드 IK 리깅 기술입니다.',
    details : [
      'Unity Animation Rigging 패키지 위에 동적 다중 본 조인트 체인 구축',
      '팔-전선 간 각도 왜곡 실시간 감지 — 메시 관통 비주얼 크래시 완전 차단',
      '불필요한 트랜스폼 간소화 및 룩업 가중치 분배로 모바일 연산 최적화',
    ],
  },
  {
    id      : 'shader-water',
    category: 'shaders',
    title   : '수심 반응형 물 렌더링',
    catLabel: 'Shaders & Rendering',
    desc    : '깊이 버퍼 기반 수심 그라데이션과 거품 포말 자동 생성, 굴절 일렁임을 구현한 스타일라이즈드 물 셰이더.',
    thumb   : null,
    videoUrl: null,
    overview: '수심 변화에 따라 물의 투명도가 자동 조절되고 경계 부위에 거품 포말이 형성되는 스타일라이즈드 수면 셰이더입니다.',
    details : [
      'Depth Buffer 텍스처 파싱 — 얕은 해안가는 투명, 깊은 해저는 짙은 파란색',
      '지형지물 깊이 차 실시간 계산으로 경계 거품 포말 자동 생성',
      'Normal 맵 두 장의 교차 UV 스크롤로 빛 굴절 일렁임 디스토션 구현',
    ],
  },
];
