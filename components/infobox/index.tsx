import React from 'react';
import CTAProvider from '../cta';

export const InfoBox: React.FC = () => {
    return (
        <div className="mx-auto my-10 max-w-5xl rounded-lg bg-blue-100 p-8 text-center text-gray-800">
            <p className="mb-4 text-lg">
                <strong>Are you a fast-growing organization struggling to keep operations lean and sales pipelines flowing?</strong>
                <br />I specialize in helping premium companies—those with over $1M in revenue—optimize processes and drive
                sustainable growth using <strong>advanced automation and AI-driven strategies.</strong> By focusing on results and ROI,
                I&apos;ll ensure every solution I deliver has a transformative impact on your bottom line.
            </p>
            <p className="text-lg">
                Ready to discover how much inefficiency is costing you?
            </p>
            <div className='pt-10'>
            <CTAProvider hookType="button" text="Let's Find Out Together" ctaType={'redirect'}/>
            </div>
        </div>
    );
};
