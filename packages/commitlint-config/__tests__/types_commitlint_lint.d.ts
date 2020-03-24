declare module '@commitlint/lint' {
  /**
   * Mostly taken from https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/types/src until their rewrite to TS is finished
   */

  type Matcher = (commit: string) => boolean;

  interface Commit {
    raw: string;
    header: string;
    type: string | null;
    scope: string | null;
    subject: string | null;
    body: string | null;
    footer: string | null;
    mentions: string[];
    notes: CommitNote[];
    references: CommitReference[];
    revert: any;
    merge: any;
  }

  interface CommitNote {
    title: string;
    text: string;
  }

  interface CommitReference {
    raw: string;
    prefix: string;
    action: string | null;
    owner: string | null;
    repository: string | null;
    issue: string | null;
  }

  type RuleCondition = 'always' | 'never';
  type RuleOutcome = Readonly<[boolean, string?]>;
  type RuleType = 'async' | 'sync' | 'either';
  type BaseRule<Value = never, Type extends RuleType = 'either'> = (
    parsed: Commit,
    when?: RuleCondition,
    value?: Value
  ) => Type extends 'either'
    ? RuleOutcome | Promise<RuleOutcome>
    : Type extends 'async'
    ? Promise<RuleOutcome>
    : Type extends 'sync'
    ? RuleOutcome
    : never;

  type Rule<Value = never> = BaseRule<Value, 'either'>;

  enum RuleSeverity {
    Disabled = 0,
    Warning = 1,
    Error = 2
  }

  interface ParserOptions {
    commentChar?: string;
    headerCorrespondence?: string[];
    headerPattern?: RegExp;
    issuePrefixes?: string[];
    mergeCorrespondence?: string[];
    mergePattern?: RegExp;
    noteKeywords?: string[];
    revertCorrespondence?: string[];
    revertPattern?: RegExp;
  }

  interface IsIgnoredOptions {
    ignores?: Matcher[];
    defaults?: boolean;
  }

  type LintRuleConfig = Record<PropertyKey, any>;

  interface LintOptions {
    defaultIgnores?: IsIgnoredOptions['defaults'];
    ignores?: IsIgnoredOptions['ignores'];
    parserOpts?: ParserOptions;

    plugins?: PluginRecords;
  }

  type PluginRecords = Record<string, Plugin>;

  interface Plugin {
    rules: {
      [ruleName: string]: Rule<unknown>;
    };
  }

  interface LintOutcome {
    input: string;
    valid: boolean;
    errors: LintRuleOutcome[];
    warnings: LintRuleOutcome[];
  }

  interface LintRuleOutcome extends LintOutcome {
    valid: boolean;
    level: RuleSeverity;
    name: string;
    message: string;
  }

  function lint(message: string, rawRulesConfig?: LintRuleConfig, rawOpts?: LintOptions): Promise<LintRuleOutcome>;

  export default lint;
}
