interface DescriptionProps {
  description: string;
  consultationsScope: string;
}

async function Description({
  description,
  consultationsScope,
}: DescriptionProps) {
  const codeDisplay = `var para          = document.querySelector('p');
  



  para.onclick = function() {
    alert('Owww, stop poking me!');
  }`;

  return (
    <>
      <p>{description}</p>
      <p>
        <em>{consultationsScope}</em>
        <span>{consultationsScope}</span>
        <p>
          <a href="mailto:nowhere@mozilla.org?cc=name2@rapidtables.com&bcc=name3@rapidtables.com&subject=The%20subject%20of%20the%20email%20é%20legal&body=The%20body%20of%20the%20email">
            Aqui está um exemplo, incluindo um cc, bcc, assunto e corpo:
          </a>
        </p>
        <dl>
          <dt>solilóquio</dt>
          <dd>
            No drama, onde um personagem fala a si mesmo, representando seus
            pensamentos ou sentimentos internos e no processo, transmitindo-os
            ao público (mas não a outros personagens).
          </dd>
          <dt>monólogo</dt>
          <dd>
            No drama, onde um personagem fala seus pensamentos em voz alta para
            compartilhá-los com o público e com outros personagens presentes.
          </dd>
          <dt>aparte</dt>
          <dd>
            No drama, onde um personagem compartilha um comentário apenas com o
            público para efeito humorístico ou dramático. Isso geralmente é um
            sentimento, pensamento ou parte de informação de fundo adicional.
          </dd>
        </dl>
        <p>
          According to the
          <a href="/pt-BR/docs/Web/HTML/Element/blockquote">
            <cite>MDN blockquote page</cite>
          </a>
          :
        </p>
        <blockquote cite="/pt-BR/docs/Web/HTML/Element/blockquote">
          <p>
            The{" "}
            <strong>
              HTML <code>&lt;blockquote&gt;</code> Element
            </strong>{" "}
            (or
            <em>HTML Block Quotation Element</em>) indicates that the enclosed
            text is an extended quotation.
          </p>
          <abbr title="Hypertext Markup Language">HTML</abbr>
        </blockquote>
        <address>
          <p>
            Page written by <a href="../authors/chris-mills/">Chris Mills</a>.
          </p>
        </address>
        <p>
          My birthday is on the 25<sup>th</sup> of May 2001.
        </p>
      </p>
      <p>
        {`Caffeine's chemical formula is C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O
        <sub>2</sub>.`}
      </p>
      <p>
        If x<sup>2</sup> is 9, x must equal 3 or -3.
      </p>

      <pre>
        <code>{codeDisplay}</code>
      </pre>

      <p>
        {`You shouldn't use presentational elements like <code>&lt;font&gt;</code>
        and`}
        <code>&lt;center&gt;</code>.
      </p>

      <p>
        In the above JavaScript example, <var>para</var> represents a paragraph
        element.
      </p>

      <p>
        Select all the text with <kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>A</kbd>.
      </p>

      <pre>
        $ <kbd>ping mozilla.org</kbd>
        <samp>
          PING mozilla.org (63.245.215.20): 56 data bytes 64 bytes from
          63.245.215.20: icmp_seq=0 ttl=40 time=158.233 ms
        </samp>
      </pre>

      <time dateTime="2016-01-20">20 January 2016</time>
    </>
  );
}

export default Description;
