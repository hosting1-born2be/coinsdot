'use client';

import { useTranslations } from 'next-intl';

import { ArticleContent } from '@/features/articles/ui/article-content';
import { ArticleHero } from '@/features/articles/ui/article-hero';
import { ArticleList } from '@/features/articles/ui/article-list';
import { ArticleSection } from '@/features/articles/ui/article-section';
import { ArticleText } from '@/features/articles/ui/article-text';

export const MicaArticle = () => {
  const t = useTranslations('micaArticle');

  return (
    <>
      <ArticleHero
        title={t('hero.title', {
          fallback: 'MiCA: Reshaping Europe’s Financial and Crypto Landscape',
        })}
        description={t('hero.description', {
          fallback:
            'The European Union has now lived under the Markets in Crypto-Assets Regulation (MiCA) for several months, and its impact is becoming clear. Far from being just another regulatory framework, MiCA has transformed the way crypto operates across Europe, reshaping both the financial sector and the user experience.',
        })}
      />
      <ArticleContent imgUrl="/images/crypto-insights/article-3.jpg">
        <ArticleSection
          title={t('content.0.title', {
            fallback: 'A Single Rulebook for All of Europe',
          })}
        >
          <ArticleText>
            {t('content.0.text.0', {
              fallback:
                'Before MiCA, Europe’s crypto environment was fragmented. Each country had its own rules, licensing models, or, in some cases, little oversight at all. This patchwork created uncertainty for companies and limited protection for users.',
            })}
          </ArticleText>
          <ArticleText>
            {t('content.0.text.1.0', {
              fallback: 'MiCA changed that. For the first time, Europe has a',
            })}{' '}
            <span className="font-bold">
              {t('content.0.text.1.1', {
                fallback: 'harmonized regulatory framework',
              })}
            </span>{' '}
            {t('content.0.text.1.2', {
              fallback:
                'that applies to all 27 member states. Licensed providers can now operate seamlessly across the EU, bringing a',
            })}{' '}
            <span className="font-bold">
              {t('content.0.text.1.3', {
                fallback: 'level of clarity, consistency, and trust',
              })}
            </span>{' '}
            {t('content.0.text.1.4', {
              fallback: 'that didn’t exist before.',
            })}
          </ArticleText>
        </ArticleSection>
        <ArticleSection
          title={t('content.1.title', {
            fallback: 'Raising the Bar for Service Providers',
          })}
        >
          <ArticleText>
            {t('content.1.text.0', {
              fallback:
                'Crypto exchanges, custodians, and other service providers are now required to meet clear standards on:',
            })}
          </ArticleText>
          <ArticleList
            values={[
              <span key="governance-and-transparency">
                <span className="font-bold">
                  {t('content.1.list.0.0', {
                    fallback: 'Governance and transparency',
                  })}
                </span>{' '}
                –{' '}
                {t('content.1.list.0.1', {
                  fallback: 'ensuring responsible operations',
                })}
              </span>,
              <span key="consumer-protection">
                <span className="font-bold">
                  {t('content.1.list.1.0', {
                    fallback: 'Consumer protection',
                  })}
                </span>{' '}
                –{' '}
                {t('content.1.list.1.1', {
                  fallback: 'prioritizing fairness and clarity in all services',
                })}
              </span>,
              <span key="market-integrity">
                <span className="font-bold">
                  {t('content.1.list.2.0', {
                    fallback: 'Market integrity',
                  })}
                </span>{' '}
                –{' '}
                {t('content.1.list.2.1', {
                  fallback:
                    'rules against manipulation, insider trading, and misleading promotions',
                })}
              </span>,
              <span key="stablecoin-safeguards">
                <span className="font-bold">
                  {t('content.1.list.3.0', {
                    fallback: 'Stablecoin safeguards',
                  })}
                </span>{' '}
                –{' '}
                {t('content.1.list.3.1', {
                  fallback:
                    'issuers must hold reserves and disclose risks in regulator-approved whitepapers',
                })}
              </span>,
            ]}
          />
          <ArticleText>
            {t('content.1.text.1', {
              fallback:
                'This shift has elevated the industry, forcing out under-regulated players and setting a higher bar for professionalism.',
            })}
          </ArticleText>
        </ArticleSection>
        <ArticleSection
          title={t('content.2.title', {
            fallback: 'Benefits for Users',
          })}
        >
          <ArticleText>
            {t('content.2.text.0', {
              fallback: 'For users, MiCA’s changes are already visible:',
            })}
          </ArticleText>
          <ArticleList
            values={[
              <span key="trust">
                <span className="font-bold">
                  {t('content.2.list.0.0', {
                    fallback: 'Trust',
                  })}
                  :
                </span>{' '}
                {t('content.2.list.0.1', {
                  fallback:
                    'Licensed platforms must act in the client’s best interests',
                })}
              </span>,
              <span key="clarity">
                <span className="font-bold">
                  {t('content.2.list.1.0', {
                    fallback: 'Clarity',
                  })}
                  :
                </span>{' '}
                {t('content.2.list.1.1', {
                  fallback:
                    'Whitepapers now explain features and risks in plain language',
                })}
              </span>,
              <span key="protection">
                <span className="font-bold">
                  {t('content.2.list.2.0', {
                    fallback: 'Protection',
                  })}
                  :
                </span>{' '}
                {t('content.2.list.2.1', {
                  fallback:
                    'Stronger rules around transparency and asset handling',
                })}
              </span>,
              <span key="transparency">
                <span className="font-bold">
                  {t('content.2.list.3.0', {
                    fallback: 'Access',
                  })}
                  :
                </span>{' '}
                {t('content.2.list.3.1', {
                  fallback:
                    'One license across the EU means users can rely on consistent standards everywhere',
                })}
              </span>,
            ]}
          />
          <ArticleText>
            {t('content.2.text.1', {
              fallback:
                'Crypto is no longer a “grey area” in Europe — it is part of a regulated, transparent financial system.',
            })}
          </ArticleText>
        </ArticleSection>
        <ArticleSection
          title={t('content.3.title', {
            fallback: 'Strengthening Europe’s Financial Position',
          })}
        >
          <ArticleText>
            {t('content.3.text.0', {
              fallback:
                'By establishing MiCA, Europe has positioned itself as a global leader in crypto regulation. While other regions still debate frameworks, the EU now offers',
            })}{' '}
            <span className="font-bold">
              {t('content.3.text.1', {
                fallback: 'legal certainty',
              })}
            </span>{' '}
            {t('content.3.text.2', {
              fallback:
                'and a clear path for innovation within a regulated space. This not only protects users but also attracts businesses seeking stability and growth opportunities.',
            })}
          </ArticleText>
        </ArticleSection>
        <ArticleSection
          title={t('content.4.title', {
            fallback: 'Coinsdot’s Perspective',
          })}
        >
          <ArticleText>
            {t('content.4.text.0', {
              fallback:
                'At Coinsdot, we view MiCA as an enabler, not a limitation. It gives our users confidence that they are trading on a licensed, compliant, and transparent exchange. For us as a provider, it creates a level playing field where the focus is on service quality, innovation, and user experience — not regulatory uncertainty.',
            })}
          </ArticleText>
        </ArticleSection>
        <ArticleSection
          title={t('content.5.title', {
            fallback: 'In Summary',
          })}
        >
          <ArticleText>
            {t('content.5.text', {
              fallback:
                'MiCA has reshaped the financial and crypto landscape of Europe. It has unified fragmented markets, improved protections, and strengthened Europe’s reputation as a safe and innovative hub for digital assets.',
            })}
          </ArticleText>
          <ArticleList
            values={[
              <span key="users">
                {t('content.5.list.0', {
                  fallback: 'For users, it means confidence and transparency.',
                })}
              </span>,
              <span key="providers">
                {t('content.5.list.1', {
                  fallback:
                    'For providers, it means accountability and opportunity.',
                })}
              </span>,
              <span key="europe">
                {t('content.5.list.2.0', {
                  fallback: 'For Europe, it signals the arrival of a',
                })}{' '}
                <span className="font-bold">
                  {t('content.5.list.2.1', {
                    fallback: 'mature, regulated crypto era',
                  })}
                </span>
                .
              </span>,
            ]}
          />
        </ArticleSection>
      </ArticleContent>
    </>
  );
};
