import { LayoutProps } from '@/models/common';
import Link from 'next/link';
import * as React from 'react';

export function MainLayout({ children }: LayoutProps) {
    return (
        <>
            <h1>Main Layout</h1>
            <div>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/about">
                    <a>About</a>
                </Link>
            </div>
            <div>{children}</div>
        </>
    );
}
