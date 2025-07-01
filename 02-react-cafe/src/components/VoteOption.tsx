import VoteStats from './VoteStats';
import Notification from './Notification';
import type { VoteType, Votes } from '../types/votes';
import css from './VoteOptions.module.css';

type Props = {
  onVote: (type: VoteType) => void;
  onReset: () => void;
  canReset: boolean;
  votes: Votes;
  totalVotes: number;
  positiveRate: number;
};

export default function VoteOptions({
  onVote,
  onReset,
  canReset,
  votes,
  totalVotes,
  positiveRate,
}: Props) {
  return (
    <div className={css.voteOptions}>
      <div className={css.container}>
        <button className={css.button} onClick={() => onVote('good')}>
          Good
        </button>
        <button className={css.button} onClick={() => onVote('neutral')}>
          Neutral
        </button>
        <button className={css.button} onClick={() => onVote('bad')}>
          Bad
        </button>

        {canReset && (
          <button className={`${css.button} ${css.reset}`} onClick={onReset}>
            Reset
          </button>
        )}
      </div>

      <div className={css.bottomSection}>
        {totalVotes === 0 ? (
          <Notification />
        ) : (
          <VoteStats
            votes={votes}
            totalVotes={totalVotes}
            positiveRate={positiveRate}
          />
        )}
      </div>
    </div>
  );
}
