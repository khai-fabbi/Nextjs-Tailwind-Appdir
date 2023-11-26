'use client'

import { motion } from 'framer-motion'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/use-toast'

export default function Page() {
  const { toast } = useToast()

  return (
    <section>
      <h3>Learn React</h3>
      <div className='mt-5'>
        <Input type='text' placeholder='Enter your text' className='max-w-xs' />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Button
            className='mt-2'
            onClick={() =>
              toast({
                title: 'This is a toast',
                description: 'This is a toast description',
              })
            }
          >
            Submit
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
